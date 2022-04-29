const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db/queries");

app.get('/api/test',(req,response)=>{
    // res.json({
    //     mesg:'Hello Backend'
    // })

    pool.query('SELECT * FROM test', (err, res)=>{
    if(!err){
        console.log(res.rows);
        response.status(200).json(res.rows);
    }
    else{
        console.log(err.message);
    }
        pool.end;
    });
   
    
})

//middleware
app.use(cors());
app.use(express.json());


app.listen(5000, () => {
    console.log("server has started on port 5000");
})