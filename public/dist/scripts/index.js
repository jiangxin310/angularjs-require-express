/**
 * Created by sundongzhi on 15/12/22.
 */
(function($) {
    $(function() {
        function LogRegister() {
            this.init();
        }

        $.extend(LogRegister.prototype, {
            init: function() {
                this.bindEvents();
            },
            bindEvents: function() {
                var self = this;
                $("#btn-signup").on('click', function() {
                    var obj = {
                        email: $("#signup-email").val(),
                        name: $("#signup-username").val(),
                        password: $("#signup-password").val(),
                        repassword: $("#signup-repassword").val()
                    };
                    console.log(obj);
                    $.ajax({
                        url:"/register",
                        type:"POST",
                        data: obj,
                        success: function(res) {
                            console.log(res)
                            if( res.code == 200 ) {
                                $("#modal-signup").modal("hide");
                            } else {
                                console.log(res.msg);
                            }
                        },
                        error: function(res) {

                        }
                    })
                });

                $("#btn-login").on('click', function() {
                    var obj = {
                        name: $("#login-username").val(),
                        password: $("#login-password").val()
                    };
                    console.log(obj);
                    $.ajax({
                        url:"/login",
                        type:"POST",
                        data: obj,
                        success: function(res) {
                            console.log(res)
                            if( res.code == 200 ) {
                                $("#modal-login").modal("hide");
                            } else {
                                console.log(res.msg);
                            }
                        },
                        error: function(res) {

                        }
                    })
                });
            }
        });

        new LogRegister();
    });
})(jQuery);
