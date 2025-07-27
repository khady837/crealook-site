import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
const body = await req.json();
const { name, email, password } = body;

if (!name || !email || !password) {
return NextResponse.json(
{ message: "Tous les champs sont requis" },
{ status: 400 }
);
}

const existingUser = await prisma.user.findUnique({
where: { email },
});

if (existingUser) {
return NextResponse.json(
{ message: "Utilisateur déjà existant" },
{ status: 400 }
);
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = await prisma.user.create({
data: {
name,
email,
password: hashedPassword,
},
});

return NextResponse.json(newUser);
}

