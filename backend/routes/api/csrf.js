const express = require('express');
const router = express.Router();

const { isProduction } = require('../../config/keys');

/* GET csrfs listing. */
// router.get('/', function (req, res, next) {
//     res.json({
//         message: "GET /api/csrfs"
//     })

// });

if (!isProduction) {
    // In development, allow developers to access the CSRF token to test the
  // server endpoints in Postman.
    router.get('/restore', function (req, res) {
        const csrfToken = req.csrfToken();
        res.status(200).json({
            'CSRF-Token': csrfToken
        });
    });
}

module.exports = router;