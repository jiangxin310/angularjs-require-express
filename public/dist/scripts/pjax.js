/**
 * Created by sundongzhi on 16/1/14.
 */
(function($) {
    $(function() {

        $(document).pjax('a[data-pjax]', '#pjax-container');


        if ($.support.pjax) {
            $(document).on('click', 'a[data-pjax]', function(event) {
                var container = $("#pjax-container");
                $.pjax.click(event, {container: container})
            })
        }
    });
})(jQuery);