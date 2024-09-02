const express = require('express');
const { generateShortId,getanalytics } = require('../Controllers/urlController'); // Correct import

const router = express.Router();

router.post('/', generateShortId); // Use generateShortId as the callback

router.get('/analytics/:shortId',getanalytics)

module.exports = router;