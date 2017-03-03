sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {

			this.getView().bindElement({
				path: "/notes/" + oEvent.getParameter("arguments").noteParam,
				model: "note"
			});
		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("notelist", true);
			}
		},
		onSave: function(oEvent) {
			var titleVal = this.getView().byId("title").getValue();
			var contentsVal = this.getView().byId("contents").getValue();
			console.log("titleVal : "+titleVal+" contentsVal : "+contentsVal);
			
			var apiUrl = "http://localhost:3000/api/write";
			//this.getView().setUri(uri);
	        
	        // set data model
			var oData = {
				"title" : titleVal,
				"contents" : contentsVal
			};
//			var oModel = new JSONModel(oData);
//	        console.log("oData : "+oData);
	        
	        //JSON.stringify() 는 json 객체를 json text로 만들어준다. 안해주면 400 에러 발생함. 반대는 JSON.parse()
	        var aData = jQuery.ajax({
	            type : "post",
	            contentType : "application/json; charset=utf-8",
	            url : apiUrl,
	            data : JSON.stringify(oData),
	            dataType : "json",
	            async: false, 
	            success : function(data,textStatus, jqXHR) {
//	                oModel.setData({modelData : data}); 
	                alert("success to post"+data.result);
	            },
	            error : function(data){
	            	alert("error!!");
	            }
	
	        });
			
			//this.getView().byId("getValue").setText(value);
		}
		
		
	});
});