import { signin } from 'next-auth/client'
 
export default async (req, res) => {
  const { email, password } = req.body
 
  const result = await signin(req, email, password)
 
  if (result.user) {
    res.status(200).json({ message: 'Sign in successful' })
  } else {
    res.status(401).json({ message: 'Sign in failed' })
  }
}
