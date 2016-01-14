/**
 * Created by sundongzhi on 16/1/14.
 */
module.exports = function() {
    return function(req, res, next) {
        if (req.header('X-PJAX')) {
            req.pjax = true;
        }

        res.renderPjax = function(view, options, fn) {
            if (req.pjax) {
                if (options) {
                    options.layout = false;
                } else {
                    options = {};
                    options.layout = false;
                }
            }

            res.render(view, options, fn);
        };

        next();
    };
};