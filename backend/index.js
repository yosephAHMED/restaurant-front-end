const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const { query } = require('./db');

app.use(express.json());
app.use(cors());
app.listen(3001,()=>console.log("server started"));

//GET request for menu and order values from database

app.get('/menu', async (req,res) =>{
    let menuitems = await pool.query("Select * from menu");
    res.json(menuitems.rows);
});
app.get('/menu/appetizer', async (req,res) =>{
    let val = 'appetizer'
    let menuitems = await pool.query(`Select * from menu where foodCategory='${val}'`);
    res.json(menuitems.rows);
});
app.get('/menu/entree', async (req,res) =>{
    let entree = 'entree'
    let menuitems = await pool.query(`Select * from menu where foodCategory='${entree}'`);
    res.json(menuitems.rows);
});
app.get('/menu/dessert', async (req,res) =>{
    let dessert = 'dessert'
    let menuitems = await pool.query(`Select * from menu where foodCategory='${dessert}'`);
    res.json(menuitems.rows);
});
app.get('/menu/drinks', async (req,res) =>{
    let drinks = 'drinks'
    let menuitems = await pool.query(`Select * from menu where foodCategory='${drinks}'`);
    res.json(menuitems.rows);
});
app.get('/allorders', async (req,res) =>{
    let allOrders = await pool.query("Select * from orders");
    res.send(allOrders.rows);
});
app.get('/pendingorders', async (req, res) =>{
    let pendingOrders = await pool.query("Select * from orders where not status");
    res.json(pendingOrders.rows);
})
app.get('/completedorders', async (req, res) =>{
    let completedOrders = await pool.query("Select * from orders where status");
    res.json(completedOrders.rows);
})
app.get('/orders/:id', async (req, res) =>{
    let x = req.params.id;
    console.log(x)
    let completedOrders = await pool.query(`Select * from orders where orderid = ${x}`);
    res.json(completedOrders.rows);
})

//POST request to add menu and order values to database

app.post('/users', async (req,res) => {
    
    let user = req.body.username;
    let pass = req.body.password;

    try{

        let exist = await pool.query(`select * from customer where username = '${user}' AND password ='${pass}'`);
        
        if(exist.rowCount === 1){
            res.json(exist.rows)
        }else{
            res.json(null);
        }

    }catch(err){
        res.json(err)
    }
    
});

app.post('/employees', async (req,res) => {

    let id = req.body.managerid;
    let pass = req.body.password;

    let exist = await pool.query(`select * from employee where managerid = ${id} AND password ='${pass}'`);

    if(exist.rowCount===0){
        res.json(null); return;
    }else{
        res.json(exist.rows);
    }

})

app.post('/newuser', async(req, res) => {

    let user = req.body.username;
    let pass = req.body.password;

    try{
        let add = await pool.query(`Insert into customer values ('${user}','${pass}')`);
        res.json(add);
    }catch(err){
        res.json("Username is in use");
    }

})

app.post('/newemployee', async (req,res) =>{

    let id = req.body.managerid;
    let pass = req.body.password;

    try{
        let add = await pool.query(`Insert into employees values ('${id}','${pass}')`);
        res.json(add);
    }catch(err){
        res.json("Manager id exists")
    }

})

app.post('/addorder', async (req,res) =>{
    // console.log(req.body.foodprice);
    let price = req.body.foodprice;
    let name = req.body.username;
    let status = req.body.status;
    let items = req.body.orderitems;

    try{
        let add = await pool.query(`Insert into orders values (DEFAULT,${status},'${name}',${price},'${items}')`);
        res.json(add);
    }catch(err){
        res.json(err)
    }

})

//PUT request to update

//updates order from pending to complete
app.put('/orders/:id', async (req, res) => {
    
    try{

        const {id} = req.params;
        const {status} = req.body;
        console.log(status)

        const updateOrder = await pool.query(`Update orders SET status = true where orderid = ${id}`);

        res.json(updateOrder);
    }catch(err){
        res.json(err);
    }
})




// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log("listen"));





// const menu = [

//     {
//         food: 'banana', 
//         price: 6        
//     },
//     {
//         food: 'apple', 
//         price: 4        
//     }
// ]
// const orders = [

//     {
//         food: 'luncch', 
//         price: 6        
//     },
//     {
//         food: 'dinner', 
//         price: 4        
//     }
// ]
// const users = [
//     {
//         username: 'daveon', 
//         password: 8000         
//     },
//     {
//         username: 'savanahh', 
//         password: 400        
//     }
// ]

// const employees = [
//     {
//         managerID: 100001, 
//         password: 8000         
//     },
//     {
//         managerID: 100002, 
//         password: 400        
//     }
// ]