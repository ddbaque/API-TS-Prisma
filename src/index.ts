import express from 'express'

const app = express()

const PORT = 3001

app.get("/", (req, res) => {
    res.send("hola")
})

app.listen(PORT, () => {
    console.log("holaaaa")
})