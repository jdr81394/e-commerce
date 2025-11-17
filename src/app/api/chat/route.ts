import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getProducts } from "@/lib/db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    // Get all products to provide context to the AI
    const products = await getProducts();

    // Create a system message with product knowledge
    const productContext = `You are a helpful shopping assistant for a fictional e-commerce store. 
    This project is suppose to demonstrate Jake Roberts' skillset as a developer. 
    You have knowledge of the following products:

${products
  .map(
    (p) =>
      `- ${p.name} (ID: ${p.id}): $${p.price}${
        p.originalPrice ? ` (was $${p.originalPrice})` : ""
      }, ${p.description || "No description"}, Category: ${
        p.category || "N/A"
      }, Available sizes: ${p.size?.join(", ") || "N/A"}, Color: ${
        p.color || "N/A"
      }${p.label ? `, Label: ${p.label}` : ""}`
  )
  .join("\n")}

Your role is to:
1. Answer questions about products
2. Help customers find the right products based on their needs
3. Provide product recommendations
4. Answer questions about pricing, sizes, colors, and availability
5. Be friendly, helpful, and concise

If a customer asks about a specific product, provide detailed information. If they're looking for something general, suggest relevant products from the catalog. Always include product names and prices in your recommendations.`;

    const messages = [
      { role: "system" as const, content: productContext },
      ...(conversationHistory || []),
      { role: "user" as const, content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 300,
    });

    const assistantMessage = completion.choices[0].message.content;

    return NextResponse.json({
      message: assistantMessage,
      success: true,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      {
        message:
          "Sorry, I'm having trouble connecting right now. Please try again later.",
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
