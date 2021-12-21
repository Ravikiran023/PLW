sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller) {
    "use strict";

    return Controller.extend("plw.controller.LaunchPad", {
        onInit: function () {
            let that = this;
            this.oComponent = this.getOwnerComponent();
            this.router = sap.ui.core.UIComponent.getRouterFor(this);
            this.router.attachRoutePatternMatched(function (oEvent) {
                that.routePatternMatched(oEvent);
            });
        },

        routePatternMatched: function (oEvent) {
            let oMasterDataModel = this.oComponent.getModel("oMasterDataModel");
            this.oMasterDataModel = oMasterDataModel;
            this.getView().setModel("oMasterDataModel", oMasterDataModel);
            let oTileCollection = [{
                "icon": "sap-icon://my-sales-order",
                "type": "Monitor",
                "title": "Sales Order / Bill book",
                "navTarget": "Billbook"
            }, {
                "icon": "sap-icon://employee",
                "type": "Monitor",
                "title": "Employee master data",
                "navTarget": "Billbook"
            }, {
                "icon": "sap-icon://customer-financial-fact-sheet",
                "type": "Monitor",
                "title": "PLW Financials",
                "navTarget": "Billbook"
            }];
            oMasterDataModel.setProperty("/TileCollection", oTileCollection);
            oMasterDataModel.refresh();
        },

        handleTileNav: function (oEvent) {
            let oSelectedTile = oEvent.getSource().getBindingContext("oMasterDataModel");
            let sPath = oSelectedTile.getPath();
            let oNavTarget = this.oMasterDataModel.getProperty(sPath + "/navTarget");
            this.router.navTo(oNavTarget);
        }
    });
});