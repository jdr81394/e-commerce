# AI Chat Assistant Setup

## Overview

The chat box component uses OpenAI's GPT-3.5-turbo model trained on your product catalog from `db.ts`. The AI assistant can:

- Answer questions about products
- Provide product recommendations
- Help customers find items by category, price, color, size
- Explain product details and availability

## Setup Instructions

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Navigate to "API Keys" section
4. Click "Create new secret key"
5. Copy the API key (you won't be able to see it again!)

### 2. Configure Environment Variables

1. Create a `.env.local` file in the project root:

   ```bash
   cp .env.local.example .env.local
   ```

2. Add your OpenAI API key:

   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Important**: Never commit `.env.local` to git (it's in `.gitignore`)

### 3. Restart Development Server

After adding the API key, restart your Next.js server:

```bash
npm run dev
```

## Features

### Product Knowledge

The AI has access to all products including:

- Product names and IDs
- Prices and sale prices
- Descriptions
- Categories (men, women, accessories)
- Available sizes
- Colors
- Labels (new, sale, out-of-stock)

### Example Questions Users Can Ask

- "Show me women's clothing under $50"
- "Do you have any yellow shirts?"
- "What accessories do you have?"
- "Tell me about the Furry hooded parka"
- "What's on sale right now?"
- "Do you have any new arrivals?"
- "Show me products in size large"

### Conversation History

The chat maintains conversation context, so users can ask follow-up questions naturally.

## Customization

### Adjust AI Behavior

Edit `/src/app/api/chat/route.ts`:

- Change `temperature` (0.0-2.0) - higher = more creative
- Change `max_tokens` - control response length
- Modify system prompt for different personality
- Switch to `gpt-4` for better responses (more expensive)

### Chat UI Customization

Edit `/src/components/ChatBox.tsx`:

- Change colors/styling
- Modify initial greeting message
- Add quick reply buttons
- Add product image cards in responses

## Cost Considerations

- GPT-3.5-turbo: ~$0.002 per 1K tokens (very affordable)
- Average conversation: ~500-1000 tokens
- Estimated cost: $0.001-$0.002 per conversation

## Troubleshooting

### "API key not found" error

- Ensure `.env.local` exists in project root
- Check that `OPENAI_API_KEY` is spelled correctly
- Restart the dev server after adding the key

### Slow responses

- Normal for first request (cold start)
- Consider upgrading to gpt-4-turbo for faster responses
- Check your internet connection

### Rate limiting

- Free tier: 3 requests per minute
- Paid tier: 3,500 requests per minute
- Implement rate limiting on your API route if needed
