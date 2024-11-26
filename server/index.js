const express = require('express')
const POST = 5000
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

const start = () => {
  try{
    app.listen(port, () => {
      console.log(`Listening on port ${PORT}`);})
  }catch (e){
    console.log(e);
  }
}