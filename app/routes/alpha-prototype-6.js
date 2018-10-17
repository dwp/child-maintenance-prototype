const express = require('express')
const router = express.Router()

router.get('/govuk', (req, res) => {
    res.render('alpha-prototype-6/govuk.html')
})
router.get('/describe-relationship', (req, res) => {
    res.render('alpha-prototype-6/1.html')
})

router.post('/describe-relationship', (req, res) => {
    let describeRelationship = req.session.data['describe-relationship']
    if (describeRelationship === "friendly") {

        res.redirect('friendly-often')
    }
    else if (describeRelationship === "amicable"){
        res.redirect("amicable")
    }
    else if (describeRelationship=== "notfriendly"){
        res.redirect("q2")
    }
    else [
        res.redirect("q2")
    ]
})


router.get('/how-often-are-you-in-contact', (req, res) => {
    res.render('alpha-prototype-6/2.html')
})


router.post('/how-often-are-you-in-contact', (req, res) => {
    let contact = req.session.data['contact']
    if (contact === "regularly") {

        res.redirect('mediation-family')
    }
    else if (contact === "occasionally") {
        res.redirect("mediation-courts")
    }
    else  [
        res.redirect("phone")
    ]
})



module.exports = router