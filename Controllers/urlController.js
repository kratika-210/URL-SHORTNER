const shortid = require('shortid');
const URL = require('../Models/urlSchema.js'); // Use require for CommonJS

function generateShortId(req, res) {
    const shortID = shortid.generate(); // Call generate() method
    URL.create({
        shortId: shortID,
        redirectUrl: req.body.url,
        clicks: []
    });
    return res.render('home',{ id: shortID });
    // return res.json({ id: shortID });
}

function getanalytics(req,res){
    const shortId = req.params.shortId;
    const result=  URL.findOne({shortId});
    return res.json({
        totalClicks:result.clicks.length,
        analytics: result.clicks
    })
}

module.exports = { generateShortId,getanalytics };