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

router.post('/paying-multiple', (req, res) => {
    let payingMultiple = req.session.data['paying-multiple']
    if (payingMultiple=== "yes") {
        res.redirect('multiple-p')
    }
    else {
        res.redirect('paying-children')
    }
})

router.get('/receiving-multiple', (req, res) => {
    res.render('test/receiving-multiple')
})

router.post('/receiving-multiple', (req, res) => {
    let receivingMultiple = req.session.data['receiving-multiple']
    if (receivingMultiple === "yes") {
        res.redirect('multiple-r')
    }
    else {
        res.redirect('receiving-children')
    }
})
router.get('/do-you-earn', (req, res) => {
    res.render('v15/income-new-p')
})

router.post('/do-you-earn', function (req, res) {

    let doesPpEarn = req.session.data['do-you-earn']
    if (doesPpEarn === "no") {
        res.redirect("nights-p")
    } else {
        res.redirect('wages-p')
    }
})


router.get('/do-you-receive-benefits-r', (req, res) => {
    res.render('test/benefits-q-r')
})

router.post('/do-you-receive-benefits-r', (req, res) => {
    let receiveBenefits2 = req.session.data['do-you-receive-benefits-r']
    if (receiveBenefits2 === "yes") {
        res.redirect('benefits-r')
    }
    else if (receiveBenefits2 ==="unknown") {
        res.redirect('do-you-know-income')
    }
    else res.redirect('do-you-know-income')
})
router.get('/do-you-know-income', (req, res) => {
    res.render('test/do-you-know-income')
})

router.post('/do-you-know-income', (req, res) => {
    let doYouKnowIncome = req.session.data['do-you-know-income']
    if (doYouKnowIncome === "yes") {
        res.redirect('wages-r')
    }
    else {
        res.redirect('unknown-income')
    }
})

router.get('/do-you-receive-benefits-p', (req, res) => {
    res.render('test/benefits-q-p')
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


router.get('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.render('test/habitually-resident.njk')
})

router.post('/are-both-parents-habitually-resident-in-the-uk', function (req, res) {

    let habituallyResident = req.session.data['habitually-resident']
    if (habituallyResident === "no") {
        res.redirect("remo")
    } else {
        res.redirect('is-there-a-court-order-for-child-maintenance-in-place')
    }
})




// court order
router.get('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.render('test/court-order.njk')
})

router.post('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    let courtOrder = req.session.data['court-order']
    if (courtOrder === "no") {

        res.redirect('is-child-under-20')
    }
    else {
        res.redirect("ineligible-courts")
    }
})

// child age
router.get('/is-child-under-20', (req, res) => {
    res.render('test/child-age.njk')
})

router.post('/is-child-under-20', (req, res) => {
    let childAge = req.session.data['child-age']
    if (childAge === "no") {
        res.redirect('over-20')
    }
    else {
        res.redirect('apply-cms')
    }
})

router.get('/do-you-want-to-personalise', (req, res) => {
    res.render('test/personalised')
})

router.post('/do-you-want-to-personalise', (req, res) => {
    let personalise = req.session.data['personalise']
    if (personalise === "no") {
        res.redirect('saved-copy')
    }
    else {
        res.redirect('personal-q')
    }
})


router.get('/receiving-children', (req, res) => {
    res.render('test/receiving-children')
})

router.post('/receiving-children', (req, res) => {
    let receivingChildren = req.session.data['receiving-children']
    if (receivingChildren === "1") {
        res.redirect('benefits-q-r')
    }
    else if (receivingChildren === "2") {
        res.redirect('benefits-q-r')
    }
    else {
        res.redirect('benefits-q-r')
    }
})


router.get('/paying-children', (req, res) => {
    res.render('test/paying-children')
})

router.post('/paying-children', (req, res) => {
    let receivingChildren = req.session.data['paying-children']
    if (receivingChildren === "1") {
        res.redirect('benefits-q-p')
    }
    else if (receivingChildren === "2") {
        res.redirect('benefits-q-p')
    }
    else {
        res.redirect('benefits-q-p')
    }
})


module.exports = router
