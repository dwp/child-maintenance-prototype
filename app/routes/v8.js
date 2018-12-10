const express = require('express')
const router = express.Router()


router.get('/paying-receiving', (req, res) => {
    res.render('v6/paying-receiving')
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
    res.render('v6/benefits-q-r')
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
    res.render('v6/benefits-q-p')
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
    res.render('v8/habitually-resident.njk')
})

router.post('/are-both-parents-habitually-resident-in-the-uk', function (req, res) {

    let habituallyResident = req.session.data['habitually-resident']
    if (habituallyResident === "no") {
        res.redirect('https://www.gov.uk/child-maintenance-if-one-parent-lives-abroad/ex-partner-lives-abroad')
    } else {
        res.redirect('is-there-a-court-order-for-child-maintenance-in-place')
    }
})




// court order
router.get('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.render('v8/court-order.njk')
})

router.post('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    let courtOrder = req.session.data['court-order']
    if (courtOrder === "no") {

        res.redirect('is-child-under-20')
    }
    else {
        res.redirect("fba")
    }
})

// child age
router.get('/is-child-under-20', (req, res) => {
    res.render('v8/child-age.njk')
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



module.exports = router
