sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller) {
    "use strict";

    return Controller.extend("plw.controller.CreateBill", {
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

        fnNavToCustomerList: function () {
            this.router.navTo("Billbook");
        }
    });
});