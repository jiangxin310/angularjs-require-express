/**
 * Created by sundongzhi on 16/1/14.
 */
var express = require('express');
var router = express.Router();


function authentication(req, res) {
    if (!req.session.user) {
        req.session.error='请先登录';
        return res.redirect('/login');
    }
}


/* GET users listing. */
router.get('/', function(req, res, next) {
    authentication(req, res);
    res.render('pjax', { title: 'pjax' });
});


router.get('/ajax', function(req, res, next) {
    authentication(req, res);
    res.status("200").json({success: "yes"});
})

router.get('/link1', function(req, res, next) {
    authentication(req, res);
    res.renderPjax('link1', { title: 'link1' });
});


router.get('/link2', function(req, res, next) {
    authentication(req, res);
    res.renderPjax('link2', { title: 'link2' });
});


router.get('/link3', function(req, res, next) {
    authentication(req, res);
    res.renderPjax('link3', { title: 'link3' });
});


router.get('/link4', function(req, res, next) {
    authentication(req, res);
    res.renderPjax('link4', { title: 'link4' });
});

module.exports = router;
