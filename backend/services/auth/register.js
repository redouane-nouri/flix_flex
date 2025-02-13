const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  try {
    const existing_user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existing_user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt_rounds = 10;
    const hashed_password = await bcrypt.hash(password, salt_rounds);

    const new_user = await prisma.user.create({
      data: {
        username: username,
        password: hashed_password,
      },
    });

    if (new_user) {
      return res.status(201).json({ message: "User registered successfully" });
    } else {
      return res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
