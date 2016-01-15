/**
 * Created by sundongzhi on 16/1/14.
 */
(function($) {
    $(function() {


        var $container = $("#pjax-container");
        $(document).pjax('a[data-pjax]', '#pjax-container');


        if ($.support.pjax) {
            //$(document).on('click', 'a[data-pjax]', function(event) {
            //    $.pjax.click(event, {container: $container})
            //});


            $(document).on('pjax:start', function() { NProgress.start(); });
            $(document).on('pjax:end',   function() { NProgress.done();  });


        }
    });
})(jQuery);