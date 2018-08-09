let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongo = require('./db/mong')
    
const vueOptions = {
    rootPath: path.join(__dirname, "/src")
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static',express.static(__dirname+'/dist/static'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/dist/index.html')
})

app.post('/signup',(req,res)=>{
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let registration = mongo.SignUp(req.body.user,req.body.pass,req.body.email)
            registration
               .then((data)=>{
                   if(data===1){
                    res.send(JSON.stringify({mes:1}))
                   }
                   })
});

app.post('/check',(req,res)=>{
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let check = mongo.userCheck(req.body.login)
        check 
             .then(()=>{res.send(JSON.stringify({mes:0}))})
             .catch(()=>{res.send(JSON.stringify({mes:1}))})
})

app.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let login = mongo.logIn(req.body.login,req.body.password)
      login  
           .then((data)=>{
               if(data==='OK'){
                   res.send(JSON.stringify({mes:1}))
               }
            
           })
           .catch((err)=>{
               if(err===1){
                   res.send(JSON.stringify({mes:2}))
               }
               else if(err===2){
                   res.send(JSON.stringify({mes:3}))
               }
           })
})

app.listen(80)