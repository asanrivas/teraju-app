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
	$('#submit_item').click(function() {
		var ItemList = Parse.Object.extend("ItemList");
		var itemList = new ItemList();

		itemList.set("category", $('#select_category').val());
		itemList.set("desc", $('#desc').val());
		itemList.set("brand", $('#brand').val());
		itemList.set("model", $('#model').val());
		itemList.set("model", $('#select_conditions').val());
		itemList.set("model", $('#year').val());
		itemList.set("model", $('#budget').val());
		itemList.set("model", $('#select_delivery').val());
		itemList.set("model", $('#select_state').val());

		itemList.save(null, {
		  success: function(itemList) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + itemList.id);
		  },
		  error: function(itemList, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and description.
		    alert('Failed to create new object, with error code: ' + error.description);
		  }
		});
	});
	
});
