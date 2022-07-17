// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// To see this route enter url localhost:3000/api/hello
// All the routes that you want in your app can be added into this file and it will be available directly
// from /api/[name]

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
