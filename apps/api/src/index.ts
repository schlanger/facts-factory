import "reflect-metadata"
import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { factRouter } from "./routes/factRouter";

const app = express()

// --- MODIFICATION ICI ---
// On récupère l'URL du frontend depuis les variables d'environnement de Dokploy
// On garde les localhost pour que tu puisses continuer à travailler en local.
const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:3000', 
  'http://0.0.0.0:5173',
  process.env.FRONTEND_URL // <-- Cette variable sera configurée dans Dokploy
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Autorise les requêtes sans origine (comme Postman ou les outils serveurs) 
    // ou si l'origine est dans notre liste autorisée
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))
app.use(express.json())

// Les headers de sécurité
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
}).catch(error => console.log("TypeORM connection error: ", error))