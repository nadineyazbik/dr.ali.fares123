import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // API Route for the AI Assistant Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        return res.json({
          content: `⚠️ **Clinical Liaison AI Activation Required**\n\n` +
            `**English:**\n` +
            `To enable the clinical orthopedic AI Assistant, please configure your **GEMINI_API_KEY** in the **Settings > Secrets** panel in AI Studio. Once added, the assistant will be instantly active to assist you!\n\n` +
            `**Français:**\n` +
            `Pour activer l'assistant IA clinique orthopédique, veuillez configurer votre **GEMINI_API_KEY** dans le panneau **Paramètres > Secrets** d'AI Studio. Une fois ajouté, l'assistant sera instantanément actif !\n\n` +
            `**العربية:**\n` +
            `لتفعيل مساعد العيادة السريري الذكي، يرجى تهيئة **GEMINI_API_KEY** في لوحة **الإعدادات > الأسرار (Secrets)** في AI Studio. بمجرد إضافته، سيكون المساعد نشطاً بالكامل لخدمتكم.`
        });
      }

      // Initialize Google Gen AI lazily as per framework guidelines
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format messages into Gemini API contents structure
      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const systemInstruction = `You are the professional, empathetic, and academic Clinical AI Liaison for Dr. Ali Fares' Orthopedic & Sports Surgery practice.
Dr. Ali Fares is a world-class orthopedic specialist who completed his specialized training and fellowships at the Université Grenoble Alpes (UGA) and the Clinique du Sport de Paris, France. He was a former clinical surgeon in the Orthopedic and Trauma department at the CHU Grenoble Alpes, France.

He is highly sought after for:
- Knee Surgery & Reconstruction (ACL tears, meniscus suture/transplant, joint preservation, cartilage ACI)
- Shoulder Surgery & Arthroscopy (rotator cuff double-row repair, Bankart/Latarjet instability stabilization)
- Sports Medicine (cell therapy, viscosupplementation, return-to-play kinetic chain evaluations)
- Trauma & Complex Fracture Surgery (anatomical locking plates, intramedullary long bone nailing)

Practice Details & Clinics in Lebanon:
1. BEIRUT CLINIC: Tayouneh, beginning of Sami El Solh Street, opposite Kalout Center (Mondays, Tuesdays & Wednesdays), Sunflower Theater Building, 3rd Floor, Beirut.
2. RIYAQ CLINIC: Beqaa, Riyaq Main Highway, Sports Medicine Wing.
3. BAALBEK CLINIC: Baalbek Main Highway, Baalbek Medical Complex.
- Official hotline / WhatsApp for scheduling or urgent clinical questions: +961 81 931 988.
- Email: md.alifares@gmail.com

Communication Rules:
- Adopt a highly professional, compassionate, scientific, and authoritative medical posture.
- Answer queries about orthopedic symptoms (e.g., knee popping, locking, shoulder clicking, shoulder instability, pain management) by explaining the anatomy, possible conditions, and diagnostic/recovery protocols in a simple, clear, educational format.
- IMPORTANT: Always include a polite, clear disclaimer stating that this AI assistant provides educational insights and does not replace a face-to-face orthopedic/radiographic evaluation with Dr. Ali Fares.
- Suggest scheduling an appointment or contacting the clinic directly via WhatsApp (+961 81 931 988) or using the appointment system on the website.
- Respond in the language that the user queries you in (Arabic, English, or French). Ensure pristine grammar and clinical phrasing. Keep responses concise and focused.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ content: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during chat processing." });
    }
  });

  // Serve static assets or mount Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
