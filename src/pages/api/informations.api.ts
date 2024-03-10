import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const bodySchema = z.object({
      login: z.string(),
      password: z.string(),
    });

    const { login, password } = bodySchema.parse(req.body);
    await prisma.informations.create({
      data: {
        login,
        password,
      },
    });

    return res.status(201).end
  } catch (err) {
    console.error(err)
    return res.status(400).end
  }
}
