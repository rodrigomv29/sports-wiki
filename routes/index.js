const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
    res.render("index", {
        title: "Express Demo",
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user

    })
})

module.exports = router;