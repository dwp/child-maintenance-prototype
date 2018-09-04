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
        res.redirect('work-together')
    } else if (agreementInPlace === "yes-working") {
        res.redirect('working-agreement')
    }
    else 
    res.redirect('agreement-type')
})

router.get('/work-together', (req, res) => {
    res.render('alpha-prototype-3/work-together.html')
})

router.post('/are-you-able-to-work-together', function (req, res) {

    let workTogether = req.session.data['work-with-other-parent']
    if (workTogether === "flexible") {
        res.redirect('fba')
     } else if (workTogether === "what-when") {
            res.redirect('calculator')
    } else if (workTogether === "direct-pay") {
        res.redirect('direct-pay')
    }
    
    else if (workTogether ==="collect") {
        res.redirect('collect-and-pay')
}
    else 
    res.redirect('no-contact')
})


router.get('/agreement-type', (req, res) => {
    res.render('alpha-prototype-3/agreement-type.html')
})

router.post('/agreement-type', function (req, res) {

    let agreementType = req.session.data['agreement-type']
    if (agreementType === "cms") {
        res.redirect('cms-not-working')
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
        res.redirect('mediation')
    }
    else if (notWorking ==="other"){
        res.redirect("https://helpwithchildarrangements.service.justice.gov.uk/")
}
    else res.redirect('calculator')
})


module.exports = router
