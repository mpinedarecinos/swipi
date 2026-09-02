import { Router } from "express";
import { customAlphabet } from "nanoid";
import { prisma } from "../db.js";

const router = Router();
const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789", 6);

router.post("/", async (req, res) => {
  const { displayName } = req.body;
  if (!displayName)
    return res.status(400).json({ error: "displayName is required" });
  try {
    const code = nanoid(6).toUpperCase();
    const room = await prisma.room.create({
      data: {
        code,
        mode: "MOVIE",
        members: {
          create: { username: displayName },
        },
      },
      include: { members: true },
    });

    res.json(room);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "something went wrong" });
  }
});

export default router;
