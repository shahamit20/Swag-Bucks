const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const Detail = require("./models/detail");
const app = express()
const port = 3029

mongoose.connect('mongodb://localhost:27017/amit')
app.use(express.urlencoded({extended: true}))

const db = mongoose.connection
db.once('open', ()=>{
    console.log("mongooe")
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'regitation.html'))
})
app.post('/post', async (req, res) => {
    console.log("Form submitted:", req.body) // 👈 Add this

    const { Name, Email, Phone, Password } = req.body
    const emop = new Detail({ Name, Email, Phone, Password })
    await emop.save()

    console.log("success ✅")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})