const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db/queries");

//middleware
app.use(cors());
app.use(express.json()); //res.body

//ROUTES//

//create customer

app.post('/api/company', async(req, res) => {
    try {
        //console.log(req.body);
        const { company_name, iso_standard, client_number, address } = req.body;
        const newCustomer = await pool.query("INSERT INTO company (company_name, iso_standard, client_number, address) VALUES($1, $2, $3, $4)",
        [company_name, iso_standard, client_number, address]
        );
        res.json(newCustomer);
    } catch (err) {
        console.error(err.message);
    }
})
//get all customer
app.get('/api/company', async(req,res) => {
    try {
        const allIsoAudit = await pool.query("SELECT * FROM company");
        res.json(allIsoAudit.rows)
    } catch (err) {
        console.error(err.message);
    }
});

//get a customer
app.get('/api/company/:id', async(req,res) => {
    try {
        const { id } = req.params;
        const isoAudit = await pool.query("SELECT * FROM company WHERE user_id = $1", [id]);
        res.json(isoAudit.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});