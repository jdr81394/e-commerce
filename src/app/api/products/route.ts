import { getProducts, getProductById } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // Get single product by ID
      const product = await getProductById(id);
      if (!product) {
        return Response.json({ error: "Product not found" }, { status: 404 });
      }
      return Response.json(product);
    }

    // Get all products
    const products = await getProducts();
    return Response.json(products);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate product data
    if (!body.name || !body.price) {
      return Response.json(
        { error: "Missing required fields: name, price" },
        { status: 400 }
      );
    }

    // In a real app, you'd save to database
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name: body.name,
      price: body.price,
      description: body.description || "",
    };

    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
