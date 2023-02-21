const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    if(req.query.isAdmin) {
        next();
    }else {
        res.send('Sorry not an Admin')
    }
})

router.get('/topsecret', (req,res) => {
    res.send('THIS IS TOP SECRET')
})

router.get('/deleteeveryting', (req,res) => {
    res.send('OK DELETED IT ALL!')
})


module.exports = router;