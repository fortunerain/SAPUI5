sap.ui.define([
   "sap/ui/core/mvc/Controller",
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.wt.controller.App", {
	   onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
   });
});