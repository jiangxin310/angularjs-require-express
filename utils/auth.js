/**
 * Created by sundongzhi on 15/12/23.
 */

module.exports = function auth() {
    return function auth(req, res, next) {
        //res.locals.user = req.session.user;
        var user = req.session.user||"";
        res.locals.user = user;

        next();
    }
}