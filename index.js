const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'Hello Backend'
    })
})

app.listen(3000, () => {
    console.log("server has started on port 3000");
})