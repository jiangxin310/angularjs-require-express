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
                    templateUrl: 'app/system/tmpl/admin.html',
                    controller:'SystemAdminController',
                    resolve: {
                        deps: [
                            '/app/system/controllers/systemAdminCtrl.js',
                            '/app/core/directives/pageDirective.js'
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