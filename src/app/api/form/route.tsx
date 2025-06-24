import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const body: Record<string, string> = {};
    
    formData.forEach((value, key) => {
      body[key] = value as string;
    });

    // Send to Netlify Forms
    const response = await fetch(process.env.NETLIFY_FORM_ENDPOINT as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body).toString(),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Netlify form submission failed!" }, { status: 500 });
    }

    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
