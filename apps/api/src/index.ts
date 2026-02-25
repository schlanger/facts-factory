import "reflect-metadata"
import "dotenv/config"
import express from 'express';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { factRouter } from "./routes/factRouter";

const app = express()

app.use(express.json())
app.use(cors())

AppDataSource.initialize().then(() => {

  app.use("/facts", factRouter)

  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}!`)
  })
})