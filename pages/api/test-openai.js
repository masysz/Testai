// /pages/api/test-openai.js
import { Configuration, OpenAIApi } from "openai";

export default async (req, res) => {
  if (req.method === "POST") {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.listEngines(); // Contoh API call ke OpenAI
      res.status(200).json({
        message: "POST request successful. OpenAI API is working!",
        data: response.data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET") {
    // Respons untuk metode GET
    res.status(200).send("Welcome! This API endpoint supports POST for OpenAI interaction.");
  } else {
    res.status(405).json({ error: "Method not allowed. Use GET or POST." });
  }
};
