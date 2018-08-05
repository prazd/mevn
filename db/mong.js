let mongo = require('mongoose'),
    conf = require('./config'),
    User = require('./Schema/User.js'),
    bcrypt = require('bcrypt')


var createHash = function(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}
    

function SignUp(log,pas,email){

    return new Promise((resolve,reject)=>{
        mongo.connect(conf.local,{ useNewUrlParser: true },(err)=>{
            if(err) throw err
        });
        
        console.log(1)
        let pep = new User({
        login:log,
        password:createHash(pas),
        email:email
        });

        User.find({login:log},(err,doc)=>{
            if(err) throw err;
            if(doc.length>0){
                reject('Такой пользователь уже существует')
                console.log('УЖЕ ЕСТЬ');
            }
            else {
                pep.save()
                console.log('SAVE')
                resolve(1)
           }
        });
    })
}

function logIn(login,pass){
    return new Promise((resolve,reject)=>{
        mongo.connect(conf.local,{ useNewUrlParser: true },(err)=>{
            if(err) throw err;
        });
            User.find({login:login},(err,doc)=>{
                if(err) throw err;
                if(doc.length !== 0){
                    bcrypt.compare(pass, doc[0].password, (err,res)=>{
                        if(res){
                            resolve('OK')
                        }
                        else{
                            reject(1)
                        }
                    })
                }
                else{
                    reject(2)
                }
            })
      
        });
        
}
module.exports.SignUp = SignUp;
module.exports.logIn = logIn;
