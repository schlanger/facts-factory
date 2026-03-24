import "reflect-metadata"
import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { factRouter } from "./routes/factRouter";

const app = express()

// Configure CORS with explicit origins
const corsOptions = {
  origin: ['http://factfactory-frontend-yov8gi-0c8d92-51-159-119-17.traefik.me/'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
}

app.use(cors(corsOptions))
app.use(express.json())

// Add security headers
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  next()
})

AppDataSource.initialize().then(() => {

  app.use("/facts", factRouter)

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}!`)
  })
})