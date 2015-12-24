/**
 * Created by sundongzhi on 15/12/24.
 */
define(['angular'], function(angular) {
   var directives = angular.module('app.directives',[]);

    return directives.directive("wstDatepicker", [function() {
        return {
            restrict:'EA',
            scope:{
                model:"=ngModel"
            },
            link: function (scope, element, attrs, ctrl) {
                if(attrs.wstDatepicker === "monthOnly"){
                    $(element).datepicker({
                        changeMonth: true,
                        changeYear: true,
                        dateFormat: 'yy-MM',
                        showButtonPanel: true,
                        closeText: '√',
                        onChangeMonthYear: function ( year, month, inst ) {
                            if(month <10){
                                month = '0'+month;
                            }
                            scope.model=year+"-"+month;
                            scope.$apply();
                        },
                        beforeShowDay : function(date){
                            return [false,'','']
                        }
                    });
                }else{
                    $(element).datepicker({
                        changeMonth: true,
                        changeYear: true,
                        dateFormat: 'yy-MM-dd',
                        showButtonPanel: true,
                        closeText: '×',
                        onSelect: function (dateText, inst) {
                            scope.model=dateText;
                        }
                    });
                    $.datepicker._gotoToday = function (id) {
                        var target = $(id);
                        var inst = this._getInst(target[0]);
                        if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                            inst.selectedDay = inst.currentDay;
                            inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                            inst.drawYear = inst.selectedYear = inst.currentYear;
                        }
                        else {
                            var date = new Date();
                            inst.selectedDay = date.getDate();
                            inst.drawMonth = inst.selectedMonth = date.getMonth();
                            inst.drawYear = inst.selectedYear = date.getFullYear();
                            this._setDateDatepicker(target, date);
                            this._selectDate(id, this._getDateDatepicker(target));
                        }
                        this._notifyChange(inst);
                        this._adjustDate(target);
                    }
                }
            }
        }
    }])
});