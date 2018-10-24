const express = require('express')
const router = express.Router()

router.get('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.render('experimental/resident.njk')
})

router.post('/are-both-parents-habitually-resident-in-the-uk', function (req, res) {

    let habituallyResident = req.session.data['resident']
    if (habituallyResident === "yes") {
        res.redirect('is-there-a-court-order-for-child-maintenance-in-place')
    } else {
        res.redirect('not-cms-eligible')
    }
})




// court order
router.get('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.render('experimental/court-order.html')
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
    res.render('experimental/child-age.html')
})

router.post('/is-child-under-20', (req, res) => {
    let childAge = req.session.data['child-age']
    if (childAge === "no") {
        res.redirect('not-cms-eligible')
    }
    else {
        res.redirect('eligible')
    }
})

module.exports = router
