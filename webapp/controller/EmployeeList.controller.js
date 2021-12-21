sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("plw.controller.EmployeeList", {
            onInit: function () {
                let that = this;
                this.oComponent = this.getOwnerComponent();
                this.router = sap.ui.core.UIComponent.getRouterFor(this);
                this.router.attachRoutePatternMatched(function (oEvent) {
                    that.routePatternMatched(oEvent);
                });
            },

            routePatternMatched: function (oEvent) {

            },

            fnNavToLaunchpad: function () {
                this.router.navTo("PLWLaunchPad");
            }
        });
    });
