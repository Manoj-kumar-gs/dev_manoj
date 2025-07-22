import sendClientMessageEmail from "@/email-send/send-client-email";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await dbConnect();
    console.log('Received POST request to /api/contact', body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

    const result = await sendClientMessageEmail({ name, email, message });
    console.log('Email send result:', result);

    if (!result) {
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    const user = await UserModel.findOneAndUpdate(
      { email },
      {
        $push: {
          messages: {
            client: name,
            content: message,
            createdAt: new Date()
          }
        },
        client: name,
        email
      },
      { new: true, upsert: true }
    );
    console.log('User updated or created:', user);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
