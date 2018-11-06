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


router.get('/do-you-receive-benefits-r', (req, res) => {
    res.render('v5/benefits-q-r')
})

router.post('/do-you-receive-benefits-r', (req, res) => {
    let receiveBenefits2 = req.session.data['do-you-receive-benefits-r']
    if (receiveBenefits2 === "yes") {
        res.redirect('benefits-r')
    }
    else {
        res.redirect('wages-r')
    }
})


router.get('/do-you-receive-benefits-p', (req, res) => {
    res.render('v5/benefits-q-p')
})

router.post('/do-you-receive-benefits-p', (req, res) => {
    let receiveBenefits = req.session.data['do-you-receive-benefits-p']
    if (receiveBenefits === "yes") {
        res.redirect('benefits-p')
    }
    else {
        res.redirect('wages-p')
    }
})


router.get('/child-age', (req, res) => {
    res.render('v5/cost-tool')
})

router.post('/child-age', (req, res) => {
    let childAge = req.session.data['child-age']
    if (childAge == "baby") {

        res.redirect('baby-food.html')
    }
    else if (childAge == "toddler")
    {
        res.redirect('toddler-food.html')
    }
    else if (childAge == "child")
    {
        res.redirect('child-food.html')
    }
    else {
        res.redirect('teenager-food.html')
}
})

module.exports = router
