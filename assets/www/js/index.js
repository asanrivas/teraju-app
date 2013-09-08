/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
$(function(){
	var ItemList = Parse.Object.extend("ItemList");
	var query = new Parse.Query(ItemList);
	query.limit(10);
	query.descending("updatedAt");
	query.find({
	  success: function(results) {
	    //alert("Successfully retrieved " + results.length + " scores.");
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	     	// alert(object.id + ' - ' + object.get('playerName'));
	     	var item_name = object.get('item_name');
	     	var desc = object.get('desc');
	     	//alert(object.updatedAt);
	     	var time = moment(object.updatedAt).fromNow();
         var item = $(".duplicater").clone().attr("class","latest_item").appendTo("#latest_item_list");
         item.find(".ititle").html(item_name);
         item.find(".idescription").html(desc);
         item.find(".itime").html(time);
         
         //item.children(".itittle").html();
	    }
	    $(".duplicater").hide();
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
	
	$('#submit_item').click(function() {
		var ItemList = Parse.Object.extend("ItemList");
		var itemList = new ItemList();
		var currentUser = Parse.User.current();
		
		itemList.set("category", $('#select_category').val());
		itemList.set("item_name", $('#item_name').val());
		itemList.set("desc", $('#desc').val());
		itemList.set("brand", $('#brand').val());
		itemList.set("model", $('#model').val());
		itemList.set("conditions", $('#select_conditions').val());
		itemList.set("year", $('#year').val());
		itemList.set("budget", $('#budget').val());
		itemList.set("select_delivery", $('#select_delivery').val());
		itemList.set("state", $('#select_state').val());
		itemList.set("user_id", currentUser.get('username'));

		itemList.save(null, {
		  success: function(itemList) {
		    // Execute any logic that should take place after the object is saved.
		    //alert('New object created with objectId: ' + itemList.id);
			location.href = "index.html?msg=success";
		  },
		  error: function(itemList, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and description.
		    alert('Failed to create new object, with error code: ' + error.description);
		  }
		});
		Parse.Push.send({
		  channels: [ "cars", "motorcycles", "apartments", "houses"],
		  data: {
		    alert: currentUser.get('username')+" is looking for "+itemList.get("item_name")+"."
		  }
		}, {
		  success: function() {
		    // Push was successful
			
		  },
		  error: function(error) {
		    // Handle error
		  }
		});
	});
	$('#submit_item1').click(function() {
	   
	   var fileUploadControl = $("#profilePhotoFileUpload")[0];
      if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photo.jpg";

        var parseFile = new Parse.File(name, file);
      }
	   
	   parseFile.save().then(function() {
         var ItemList = Parse.Object.extend("ItemList");
   		var itemList = new ItemList();
   		var currentUser = Parse.User.current();

   		itemList.set("category", $('#select_category1').val());
   		itemList.set("item_name", $('#item_name1').val());
   		itemList.set("desc", $('#desc1').val());
   		itemList.set("brand", $('#brand1').val());
   		itemList.set("model", $('#model1').val());
   		itemList.set("conditions", $('#select_conditions1').val());
   		itemList.set("year", $('#year1').val());
   		itemList.set("budget", $('#budget1').val());
   		itemList.set("select_delivery", $('#select_delivery1').val());
   		itemList.set("state", $('#select_state1').val());
   		itemList.set("user_id", currentUser.get('username'));

   		itemList.save(null, {
   		  success: function(itemList) {
   		    // Execute any logic that should take place after the object is saved.
   		    //alert('New object created with objectId: ' + itemList.id);
   			location.href = "index.html?msg=success";
   		  },
   		  error: function(itemList, error) {
   		    // Execute any logic that should take place if the save fails.
   		    // error is a Parse.Error with an error code and description.
   		    alert('Failed to create new object, with error code: ' + error.description);
   		  }
   		});
      }, function(error) {
        // The file either could not be read, or could not be saved to Parse.
      });
	
	});
	
});
