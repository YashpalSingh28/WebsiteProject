const router=require('express').Router()
const Reg=require('../models/reg')
const Banner=require('../models/banner')

router.get('/',(req,res)=>{
    res.render('admin/login.ejs')
}) 

router.post('/',async(req,res)=>{
    const {us,pass}=req.body
    const usercheck=await Reg.findOne({username:us})
    if(usercheck!==null){
        if(usercheck.password==pass){
            res.redirect('/admin/dashboard')
        }else{
            res.redirect('/admin/')
        }
    }else{
        res.redirect('/admin/')
    }
})

router.get('/dashboard',(req,res)=>{
    res.render('admin/dashboard.ejs')
})

router.get('/banner',async(req,res)=>{
    const record=await Banner.findOne()
    res.render('admin/banner.ejs',{record})
})

router.get('/bannerupdate/:id',async(req,res)=>{
    const id=req.params.id
    const record=await Banner.findById(id)
    res.render('admin/bannerform.ejs',{record})
})





module.exports=router