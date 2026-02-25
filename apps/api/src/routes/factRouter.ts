import { Router } from "express";
import { factRepository } from "../repositories/factRepository";

export const factRouter = Router()

factRouter.get('/random', async (req, res) => {
    const fact = await factRepository.findOne({})
    res.send({
        fact
    })
})

factRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    if (id) {
        const fact = await factRepository.findOneBy({ id: parseInt(id) })
        res.send({
            fact
        })
    } else {
        const facts = await factRepository.find()
        res.send({
            facts
        })
    }
})

factRouter.post('/', async (req, res) => {
    const { theme, fact } = req.body
    const newFact = await factRepository.save({
        theme,
        fact
    })
    res.send({
        fact: newFact
    })
})
