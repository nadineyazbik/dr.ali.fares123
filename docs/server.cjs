var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  const PORT = 3e3;
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        return res.json({
          content: `\u26A0\uFE0F **Clinical Liaison AI Activation Required**

**English:**
To enable the clinical orthopedic AI Assistant, please configure your **GEMINI_API_KEY** in the **Settings > Secrets** panel in AI Studio. Once added, the assistant will be instantly active to assist you!

**Fran\xE7ais:**
Pour activer l'assistant IA clinique orthop\xE9dique, veuillez configurer votre **GEMINI_API_KEY** dans le panneau **Param\xE8tres > Secrets** d'AI Studio. Une fois ajout\xE9, l'assistant sera instantan\xE9ment actif !

**\u0627\u0644\u0639\u0631\u0628\u064A\u0629:**
\u0644\u062A\u0641\u0639\u064A\u0644 \u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0639\u064A\u0627\u062F\u0629 \u0627\u0644\u0633\u0631\u064A\u0631\u064A \u0627\u0644\u0630\u0643\u064A\u060C \u064A\u0631\u062C\u0649 \u062A\u0647\u064A\u0626\u0629 **GEMINI_API_KEY** \u0641\u064A \u0644\u0648\u062D\u0629 **\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A > \u0627\u0644\u0623\u0633\u0631\u0627\u0631 (Secrets)** \u0641\u064A AI Studio. \u0628\u0645\u062C\u0631\u062F \u0625\u0636\u0627\u0641\u062A\u0647\u060C \u0633\u064A\u0643\u0648\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0646\u0634\u0637\u0627\u064B \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0644\u062E\u062F\u0645\u062A\u0643\u0645.`
        });
      }
      const ai = new import_genai.GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build"
          }
        }
      });
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));
      const systemInstruction = `You are the professional, empathetic, and academic Clinical AI Liaison for Dr. Ali Fares' Orthopedic & Sports Surgery practice.
Dr. Ali Fares is a world-class orthopedic specialist who completed his specialized training and fellowships at the Universit\xE9 Grenoble Alpes (UGA) and the Clinique du Sport de Paris, France. He was a former clinical surgeon in the Orthopedic and Trauma department at the CHU Grenoble Alpes, France.

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
          temperature: 0.7
        }
      });
      res.json({ content: response.text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during chat processing." });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
