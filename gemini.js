// ------ Google Gemini API ko import kar rahe hain ------
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

// Model ka naam jisse response generate hoga
const MODEL_NAME = "gemini-2.0-flash";

// ⭐ Yaha apni API Key paste karo (Isko public mat karna)
const API_KEY = "AIzaSyBvWBY94Dp1AWXFC3HyH--DVYebH0OaWgU";


// ----------------------------------------------------------------
//  runChat() Function
//  → Ye function user ka prompt leta hai
//  → Gemini API ko call karta hai
//  → Aur final response return karta hai
// ----------------------------------------------------------------
async function runChat(prompt) {

    // GoogleGenerativeAI ka object bana rahe hain API key ke sath
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Model ko load kar rahe hain (Gemini Flash model)
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Generation settings – model ka behavior control karte hain
    const generationConfig = {
        temperature: 0.75,    // Output kitna creative hoga
        topK: 1,              // Best tokens choose karega
        topP: 1,              // Filtering control
        maxOutputTokens: 2048 // Maximum response length
    };

    // Safety settings – harmful content block karne ke liye
    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    // Chat session start kar rahe hain (history empty hai)
    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: []   // Yaha chat ka previous data store hota, abhi blank
    });

    // Prompt send kar rahe hain model ko
    const result = await chat.sendMessage(prompt);

    // Response object se sirf text extract kar rahe hain
    const response = result.response;
    return response.text();
}

// runChat function ko export kar rahe hain taaki app ke dusre parts me use ho sake
export default runChat;
