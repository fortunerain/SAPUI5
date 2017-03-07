sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.NoteList", {
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			var param = oItem.getBindingContext("note").getProperty("title");
			var param = oItem.getBindingContext("note").getPath().substr(7);

			
			oRouter.navTo("detail", {
				noteParam: param
			});
		}

	});
});
