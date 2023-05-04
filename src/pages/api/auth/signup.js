import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

const prisma = new PrismaClient()

export default async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

