/**
 * Created by sundongzhi on 15/11/9.
 */
define([],function() {

    return {
        "admin.system": {
            url: "/system",
            views: {
                "viewCon": {
                    templateUrl: 'app/system/tmpl/system.html'
                }
            }
        },
        "admin.system.admin":{
            url: "/admin",
            views: {
                "viewConInner": {
                    templateUrl: 'app/system/tmpl/userList.html',
                    controller:'SystemUserListController',
                    resolve: {
                        deps: [
                            'system/controllers/userList',
                            'core/directives/pageDirective'
                        ]
                    }
                }
            }

        },
        "admin.system.form":{
            url: "/form",
            views: {
                "viewConInner": {
                    templateUrl: 'app/system/tmpl/form.html',
                    controller:'SystemFormController',
                    resolve: {
                        deps: [
                            'system/controllers/form'
                        ]
                    }
                }
            }

        },

        "admin.system.animate": {
            url: "/animate",
            views: {
                "viewConInner": {
                    templateUrl: 'app/system/tmpl/animate.html',
                    controller:'SystemAnimateController',
                    resolve: {
                        deps: [
                            'system/controllers/animate'
                        ]
                    }
                }
            }
        },

        "admin.system.permission": {
            url: "/permission",
            views: {
                "viewConInner": {
                    templateUrl: 'app/system/tmpl/permission.html'
                }
            }
        }
    }
})