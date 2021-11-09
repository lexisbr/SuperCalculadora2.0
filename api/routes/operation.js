const { Router } = require('express');
const axios = require('axios');
const router = new Router();
const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;
const worker = `http://${workerhost}:${workerport}/math/operation`;



router.post('/suma',(req,res) =>{  
    const {op1,op2} = req.body;
    console.log(op1+" "+op2);
    const result = Number(op1) + Number(op2);
    res.status(200).json({resultado: result});
});

router.post('/resta',(req,res) =>{   
    const {op1,op2} = req.body;
    const result = Number(op1) - Number(op2);
    res.status(200).json({resultado: result});
});

router.post('/multiplicacion',(req,res) =>{   
    const {op1,op2} = req.body;
    const result = Number(op1) * Number(op2);
    res.status(200).json({resultado: result});
});

router.post('/division',(req,res) =>{   
    const {op1,op2} = req.body;
    const result = Number(op1) / Number(op2);
    res.status(200).json({resultado: result});
});

module.exports = router;