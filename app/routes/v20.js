const express = require('express')
const router = express.Router()

router.get('/paying-receiving', (req, res) => {
    res.render('test/paying-receiving')
})

router.post('/paying-receiving', (req, res) => {
    let payingReceiving = req.session.data['paying-receiving']
    if (payingReceiving === "paying") {
        res.redirect('paying-multiple')
    }
    else {
        res.redirect('receiving-multiple')
    }
})
router.get('/paying-multiple', (req, res) => {
    res.render('test/paying-multiple')
})

module.exports = router
