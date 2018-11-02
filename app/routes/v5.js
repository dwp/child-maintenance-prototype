const express = require('express')
const router = express.Router()


router.get('/paying-receiving', (req, res) => {
    res.render('v5/paying-receiving')
})

router.post('/paying-receiving', (req, res) => {
    let payingReceiving = req.session.data['paying-receiving']
    if (payingReceiving === "paying") {
        res.redirect('paying-children')
    }
    else {
        res.redirect('receiving-children')
    }
})

module.exports = router
