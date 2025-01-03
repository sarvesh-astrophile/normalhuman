// /api/trpc/clerk/webhook/route.ts

import { db } from "@/server/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const user = await db.user.create({
    data: {
      id: data.data.id,
      emailAddress: data.data.email_addresses[0].email_address,
      firstName: data.data.first_name,
      lastName: data.data.last_name,
      imageUrl: data.data.image_url,
    },
  });
  console.log("user created");
  return new Response("Webhook received", { status: 200 });
};
