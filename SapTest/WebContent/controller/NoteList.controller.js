sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.NoteList", {
//		onInit: function (oEvent) {
//			//node로 요청
//			var apiUrl = "http://localhost:3000/api/note/"+param;
////			this.getView().setUri(uri);
//	        var oModel = new sap.ui.model.json.JSONModel();
//	        var aData = jQuery.ajax({
//	            type : "GET",
//	            contentType : "application/json",
//	            url : apiUrl,
//	            dataType : "json",
//	            async: true, 
//	            success : function(data,textStatus, jqXHR) {
//	                oModel.setData({modelData : data}); 
//	                alert("success to post");
//	            }
//
//	        });
//		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//			var param = oItem.getBindingContext("note").getProperty("title");
			var param = oItem.getBindingContext("note").getPath().substr(7);
			console.log("param : "+oItem.getBindingContext("note").getPath());
			
			
			//param으로 title을 던진다.
			oRouter.navTo("detail", {
				noteParam: param
			});
		}

	});
});
