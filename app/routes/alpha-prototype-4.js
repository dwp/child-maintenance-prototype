const express = require('express')
const router = express.Router()
// questions

// UK resident
// If either parent isn't a habitual resident of the UK, this directs them to the FBA information. 
router.get('/are-both-parents-habitually-resident-in-the-uk', (req, res) => {
    res.render('alpha-prototype-4/habitually-resident.njk')
})

router.post('are-both-parents-habitually-resident-in-the-uk', function (req, res) {

    let habituallyResident = req.session.data['habitually-resident']
    if (habituallyResident === "no") {
        res.redirect('fba')
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
        res.redirect("static-pages/courts")
    }
})

// child age
router.get('/is-child-under-20', (req, res) => {
    res.render('alpha-prototype-4/child-age.njk')
})

router.post('/is-child-under-20', (req, res) => {
    let childAge = req.session.data['child-age']
    if (childAge === "no") {
        res.redirect('-------')
    }
    else {
        res.redirect('what-information-do-you-have-about-the-other-parent')
    }
})

// parent info
router.get('/what-information-do-you-have-about-the-other-parent', (req, res) => {
    res.render('alpha-prototype-4/other-parent.njk')
})

router.post('/what-information-do-you-have-about-the-other-parent', (req, res) => {
    res.redirect('in-contact')
})

// in contact with other parent
router.get('/in-contact', (req, res) => {
    res.render('alpha-prototype-4/in-contact.njk')
})

router.post('/in-contact', (req, res) => {
    let inContact = req.session.data['in-contact']
    if (inContact === 'no') {
        res.redirect('static-pages/what-cms-can-do')
    }
    else {
        res.redirect('domestic-abuse')
    }


})




// domestic abuse
router.get('/domestic-abuse', (req, res) => {
    res.render('alpha-prototype-4/abuse.njk')
})

router.post('/domestic-abuse', (req, res) => {
    let domesticAbuse = req.session.data['domestic-abuse']
    if (domesticAbuse === 'no') {
        res.redirect('fba')
    }
    else { res.redirect('static-pages/abuse-fba') }
})
// fba
router.get('/fba', (req, res) => {
    res.render('alpha-prototype-4/fba.html')
})

module.exports = router
