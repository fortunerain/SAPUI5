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
			var _id = this.getView().byId("_id").getValue();
			var title = this.getView().byId("title").getValue();
			var contents = this.getView().byId("contents").getValue();
			var user = this.getView().byId("user").getValue();
			var regdate = this.getView().byId("regdate").getValue();
			
			var apiUrl = "http://localhost:3000/api/note/save";
	        
	        // set data model
			var oData = {
				"_id": _id,
				"title": title,
				"contents": contents,
				"user": user,
				"regdate": regdate
			};
	        console.log(oData);
	        //JSON.stringify() 는 json 객체를 json text로 만들어준다. 안해주면 400 에러 발생함. 반대는 JSON.parse()
	        jQuery.ajax({
	            type : "post",
	            headers : {
	            	'content-type' : 'application/json',
	            	'x-id' : '123'
	            },
//	            contentType : "application/json",
	            url : apiUrl,
	            data : JSON.stringify(oData),
	            dataType : "json",
	            async: false, 
	            success : function(data,textStatus, jqXHR) {
	                alert("success to post : "+data.result);
	            },
	            error : function(data){
	            	alert("error!!");
	            }
	
	        });
	        
		}
	});
});