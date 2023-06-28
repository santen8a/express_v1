const express = require("express")

const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded())

const groceryList = [
    {
        item:"milk",
        quantity:2,
    },{
        item:"boobies",
        quantity:3,           
    },{
        item:"beef",
        quantity:1,           
    }
]

app.listen(PORT,()=>{
    console.log("Running express server on port 3001");
})
start = Date.now()
app.get('/groceries',(req,res,next)=>{
    console.log("im before sending back",Date.now()-start);
    next();
},(req,res)=>{
    groceryList.push({
        "time elapsed":(Date.now()-start)
    })
    res.send(groceryList)
})


app.post("/groceries",(request,response)=>{
    console.log(request.body);
    console.log(JSON.stringify(request.body));
    groceryList.push(request.body)
    response.send(201);
});