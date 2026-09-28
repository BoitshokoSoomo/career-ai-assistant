const cvSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    profile: { type: "string" },
    experience: { type: "array", items: { type: "string" } },
    education: { type: "array", items: { type: "string" } },
    skills: { type: "array", items: { type: "string" } },
    tips: { type: "array", items: { type: "string" } },
  },
  required: ["profile", "experience", "education", "skills", "tips"],
};

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.status(503).json({ error: "AI generation is not configured" });
  }

  const input = request.body || {};
  const prompt = JSON.stringify(input);
  const upstream = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      store: false,
      instructions: "You are an expert CV writer. Build a truthful, ATS-friendly CV from the candidate data. Never invent employers, qualifications, dates, achievements, or metrics. Use concise action-led experience bullets. Return only the requested JSON.",
      input: prompt,
      text: {
        format: {
          type: "json_schema",
          name: "generated_cv",
          strict: true,
          schema: cvSchema,
        },
      },
    }),
  });

  const payload = await upstream.json();
  if (!upstream.ok) {
    return response.status(upstream.status).json({ error: "AI generation failed" });
  }

  const outputText = payload.output
    ?.flatMap((item) => item.content || [])
    .find((item) => item.type === "output_text")?.text;

  if (!outputText) {
    return response.status(502).json({ error: "The AI did not return CV content" });
  }

  try {
    return response.status(200).json(JSON.parse(outputText));
  } catch {
    return response.status(502).json({ error: "The AI returned an invalid CV" });
  }
}
