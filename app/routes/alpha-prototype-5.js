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

module.exports = router
