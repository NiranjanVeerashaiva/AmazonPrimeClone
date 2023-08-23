const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const PORT=3001
const path=require('path')



const User=require('./model/user')
const Movie=require('./model/movielist')
const Favorite=require('./model/fav')


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'./Client/build')))


const dbURL="mongodb+srv://Niranjan:Niranjan1813@cluster0.ewxnxvc.mongodb.net/PrimeClone?retryWrites=true&w=majority"
mongoose.connect(dbURL).then(()=>{
    console.log("connected to database");
})



//signup
app.post('/signup',(req,res)=>{
User.findOne({email:req.body.email}).then((doc)=>{
    if(doc){
        res.send({message:"user already exist"})
    }
    else{
        let data=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        data.save().then(()=>{
            res.send({message:"User created successful"});
        }).catch((err)=>{
            res.send({message:"registration failed"});
        })
    }
})
})


//login
app.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if(doc){
            if(doc.password===req.body.password){
                res.send({message:"login successful",status:200})
            }
            else{
                res.send({message:"user id or password is wrong try again"})
            }
        }
        else{
            res.send({message:"user not found please signup"})
        }
    })
})


app.post('/addmovie',(req,res)=>{
    const data=new Movie({
        name:req.body.name,
        image:req.body.image,
        gerne:req.body.gerne,
        description:req.body.description,
        year:req.body.year,
        time:req.body.time,
        IMDb:req.body.IMDb,
        quality:req.body.quality,
    })
    data.save().then(()=>{
        res.send({message:"movie added successfull"})
    }).catch((err)=>{
        res.send({message:"cannot add movie"})
    })
})


app.get('/movie',async(req,res)=>{
try {
    const data=await Movie.find()
    res.json(data)
} catch (error) {
    console.log(error);
}
})


app.post('/favorite',(req,res)=>{
    Favorite.findOne({name:req.body.name}).then((doc)=>{
        if(doc){
            res.send({message:"already in favorite"})
        }
        else{
            let data=new Favorite({
                name:req.body.name,
                image:req.body.image,
                gerne:req.body.gerne,
                description:req.body.description,
                year:req.body.year,
                time:req.body.time,
                IMDb:req.body.IMDb,
                quality:req.body.quality,
            })
            data.save().then(()=>{
                res.send({message:"added successfully"})
            }).catch((err)=>{
                res.send({message:"cannot add to favorites"})
            })
        }
    })
})


app.get('/favMovie',async(req,res)=>{
    try {
        let data=await Favorite.find()
        res.json(data)
    } catch (error) {
       console.log("error"); 
    }
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./Client/build/index.html'))
})
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
})
