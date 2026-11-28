const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('biblioteca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Livro = sequelize.define('Livros', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    autor: { type: DataTypes.STRING, allowNull: false },
    paginas: { type: DataTypes.DECIMAL, allowNull: false },
    preco: { type: DataTypes.DECIMAL, allowNull: false }
})

const api = express()
api.use(cors())
api.use(express.json())
const port = 5000

api.post('/livros', async (req, res) => {
    try {

        const {titulo, autor, paginas, preco } = req.body


        await Livro.create({ titulo, autor, paginas, preco})

        res.status(201).json({ mensagem: 'Livro cadastrado com sucessso!' })
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao cadastrar livro.' })
    }
})

api.get('/livros', async (req, res) => {
    try {
        const todosOsLivros = await Livro.findAll()
        res.json(todosOsLivros)
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar livros.' })
    }
})

sequelize.sync().then(() => {
    api.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado!')
    })
}).catch(() => {
    console.log('Erro ao conectar ao banco de dados...')
    console.log('Encontre o erro: abaixo: \n', erro)
})