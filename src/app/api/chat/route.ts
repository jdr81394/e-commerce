import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getProducts, PaginatedProducts } from "@/lib/db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    // Get all products to provide context to the AI
    const productsObject: PaginatedProducts = await getProducts();
    const { products } = productsObject;

    // About Jake Roberts context
    const aboutContext = `
About Jake Roberts (Developer of this site):
Jake Roberts is a Full-Stack Engineer and AWS Certified Solutions Architect with seven years of experience designing, delivering, and scaling high-impact applications across e-commerce, cloud infrastructure, and AI-powered systems. He specializes in React, Next.js, Node.js/NestJS, and AWS microservices.
You can call Jake at 732-991-9233 or email him at jdr81394@gmail.com
You can also call Jake's AI shopping assistant at +1 (855) 412-1307

Key Accomplishments:
- Led teams and delivered systems used by thousands of real customers
- Built components used by 100,000+ monthly users
- Designed data pipelines and APIs processing millions of records
- Worked in AGILE environments of 20+ engineers
- Architected cloud-native solutions saving companies hundreds of thousands of dollars
- Developed AI-powered chatbots and integrated them into business workflows

Focus Areas:
- Full-stack application development (React, Next.js, Node.js)
- Cloud infrastructure (AWS)
- AI automation and chatbots (OpenAI integration)
- E-commerce systems at scale
- Modern deployment practices (CI/CD, Vercel)

This E-Commerce Demo:
This site is a portfolio piece showcasing Jake's ability to design modern front-end experiences while thinking through real-world retail workflows. It's deployed on Vercel and demonstrates clean UI/UX, realistic e-commerce components, familiar retail features, proper information architecture, and deployment best practices.

The demo includes product grids, filtering, pagination, cart functionality, and this AI chatbot you're speaking with - all built to represent the type of scalable work Jake has done professionally.

Contact Information:
- Address:  New Brunswick, NJ 08901
- Phone: 732-991-9233
- Support Email: jdr81394@gmail.com
- There is a contact form available on the /contact page for inquiries

For questions about Jake Roberts or this demo project, direct users to the /about page.
For contacting the business, direct users to the /contact page or provide the contact information above.
`;

    // Create a system message with product knowledge
    const productContext = `You are a helpful shopping assistant for a fictional e-commerce store. 
    This project is designed to demonstrate Jake Roberts' skillset as a developer. 
    
${aboutContext}

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
5. Answer questions about Jake Roberts, the developer of this site, and his experience
6. Explain that this is a demo project showcasing Jake's full-stack development skills
7. Provide contact information when asked (address, phone, email)
8. Direct users to relevant pages (/about for developer info, /contact for inquiries)
9. Be friendly, helpful, and concise

If a customer asks about Jake Roberts, the developer, or who built this site, provide information from the "About Jake Roberts" section above.
If a customer asks about contact information, hours, or how to reach the business, provide the contact details from the "Contact Information" section.
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
