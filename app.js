const express = require('express')
// import express from 'express'

//const file = require('./package.json')
// import file from './package.json'

//? localhost:8000/api/v1/users/25

//! protocolo TCP/IP

const port = 8001

const app = express()

app.get('/hola', (peticion, respuesta)  => {
    respuesta.json({
        message: 'Hello World'
    })
})

app.delete('/hola', (peticion, respuesta) => {
    respuesta.json({
        message: 'Hola pero desde delete'
    })
})

//? este listen, va a estar hasta abajo de nuestro app.js
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})