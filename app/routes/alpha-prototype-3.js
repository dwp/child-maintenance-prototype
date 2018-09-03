const express = require('express')
const router = express.Router()

// questions

// UK resident
 //If either parent isn't a habitual resident of the UK, this directs them to the FBA information. 
router.get('/start', (req, res) => {
    res.render('alpha-prototype-3/start.html')
})

router.post('agreement-in-place', (req, res) => {
    res.redirect('already-agreement')
})

router.get('/agreement-in-place', (req, res) => {
    res.render('alpha-prototype-3/already-agreement.njk')
})

router.post('/agreement-in-place', function (req, res) {

    let agreementInPlace = req.session.data['agreement-in-place']
    if (agreementInPlace === "no") {
        res.redirect('fba')
    } else if (agreementInPlace === "yes-working") {
        res.redirect('calculator')
    }
    else 
    res.redirect('agreement-type')
})

router.get('/agreement-type', (req, res) => {
    res.render('alpha-prototype-3/agreement-type.html')
})

router.post('/agreement-type', function (req, res) {

    let agreementType = req.session.data['agreement-type']
    if (agreementType === "cms") {
        res.redirect('contact-cms')
    } 
    else
        res.redirect('not-working')
})

router.get('/not-working', (req, res) => {
    res.render('alpha-prototype-3/not-working.html')
})

router.post('/not-working', function (req, res) {

    let notWorking= req.session.data['not-working']
    if (notWorking === "not-paying") {
        res.redirect('courts')
    }
    else
        res.redirect('calculator')
})


module.exports = router
