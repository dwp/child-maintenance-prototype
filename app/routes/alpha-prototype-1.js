const express = require('express')
const router = express.Router()

// questions

// uk resident
router.get('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.render('alpha-prototype-1/questions/habitually-resident.njk')
})

router.post('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.redirect('is-there-a-court-order-for-child-maintenance-in-place')
})

// court order
router.get('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.render('alpha-prototype-1/questions/court-order.njk')
})

router.post('/is-there-a-court-order-for-child-maintenance-in-place', (req, res) => {
    res.redirect('is-child-under-20')
})

// child age
router.get('/is-child-under-20', (req, res) => {
    res.render('alpha-prototype-1/questions/child-age.njk')
})

router.post('/is-child-under-20', (req, res) => {
    res.redirect('what-information-do-you-have-about-the-other-parent')
})

// parent info
router.get('/what-information-do-you-have-about-the-other-parent', (req, res) => {
    res.render('alpha-prototype-1/questions/other-parent.njk')
})

router.post('/what-information-do-you-have-about-the-other-parent', (req, res) => {
    res.redirect('domestic-abuse')
})

// domestic abuse
router.get('/domestic-abuse', (req, res) => {
    res.render('alpha-prototype-1/questions/abuse.njk')
})

router.post('/domestic-abuse', (req, res) => {
    res.redirect('fba')
})
// fba
router.get('/fba', (req, res) => {
    res.render('alpha-prototype-1/questions/fba.html')
})

module.exports = router
