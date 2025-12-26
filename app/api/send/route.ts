import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
    try{const { instagram, email } = await request.json();
    const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ['eudandev25@gmail.com'],
        subject: "Novo cadastro",
        html: `<strong>Instagram:</strong> ${instagram} <br/> <strong>Email:</strong> ${email}`,
    })
    return NextResponse.json({ data });} catch (error) {
        return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
    }
}