const express = require('express')
const router = express.Router()

router.get('/paying-receiving', (req, res) => {
    res.render('test/paying-receiving')
})

router.post('/paying-receiving', (req, res) => {
    let payingReceiving = req.session.data['paying-receiving']
    if (payingReceiving === "paying") {
        res.redirect('payment-to-one-or-more-parents')
    }
    else {
        res.redirect('receiving-multiple')
    }
})
router.get('/paying-multiple', (req, res) => {
    res.render('test/paying-multiple')
})

router.get('/paying-receiving', (req, res) => {
    res.render('test/paying-receiving')
})
////////////////////////////////////////////////////////////////////////
router.post('/paying-multiple-parents', (req, res) => {
    let payingMultiple = req.session.data['paying-multiple-parent']
    if (payingMultiple === "yes") {
        res.redirect('paying-multiple-parents')
    }
    else {
        res.redirect('')
    }
})

/////////////////////////////////////////////////checkbox routes for benefits-p
router.post('/benefits-p', (req, res) => {
    let receivingBenefits = req.session.data['recieving-benefits']
    if (receivingBenefits === "incomeSupport") {
        res.redirect('paying-multiple-parents')
    }
    else {
        res.redirect('')
    }
})


module.exports = router
