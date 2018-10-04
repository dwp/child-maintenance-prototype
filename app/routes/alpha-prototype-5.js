const express = require('express')
const router = express.Router()

router.get('/gov-uk', (req, res) => {
    res.render('alpha-prototype-5/gov-uk.html')
})

router.get('/1what-is-cm', (req, res) => {
    res.render('alpha-prototype-5/1what-is-cm.html')
})

router.get('/communicate', (req, res) => {
    res.render('alpha-prototype-5/2.html')
})

router.post('/communicate', function (req, res) {

    let communicate = req.session.data['communicate']
    if (communicate === "yes") {
        res.redirect('3')
    }
    else
        res.redirect('contact')
})




router.get('/conversation', (req, res) => {
    res.render('alpha-prototype-5/3')
})

router.post('/conversation', function (req, res) {

    let conversation = req.session.data['conversation']
    if (conversation === "no") {
        res.redirect('own-arrangement')
    }
    else
        res.redirect('no-communicate')
})

router.get('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.render('alpha-prototype-4/habitually-resident.njk')
})

router.post('/are-both-parents-habitually-resident-in-the-uk', function (req, res) {

    let habituallyResident = req.session.data['habitually-resident']
    if (habituallyResident === "no") {
        res.redirect('not-cms-eligible')
    } else {
        res.redirect('is-there-a-court-order-for-child-maintenance-in-place')
    }
})




// court order
router.get('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.render('alpha-prototype-4/court-order.njk')
})

router.post('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    let courtOrder = req.session.data['court-order']
    if (courtOrder === "no") {

        res.redirect('is-child-under-20')
    }
    else {
        res.redirect("not-cms-eligible")
    }
})

// child age
router.get('/is-child-under-20', (req, res) => {
    res.render('alpha-prototype-4/child-age.njk')
})

router.post('/is-child-under-20', (req, res) => {
    let childAge = req.session.data['child-age']
    if (childAge === "no") {
        res.redirect('not-cms-eligible')
    }
    else {
        res.redirect('phone')
    }
})

module.exports = router
