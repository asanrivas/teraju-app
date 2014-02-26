/*
 * Developed by Alireza Eskandarpour Shoferi (@cyletech)
 * http://about.me/cyletech
 *
 * (c) 2013 Alireza Eskandarpour Shoferi
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
$(function(){
	$("#items > li > a").click(function(e){
		e.preventDefault();
		if($(this).hasClass("expanded"))
		{
			$(this).removeClass("expanded");
			$(this).parent().children("ul").stop(true,true).slideUp("normal");
		}
		else
		{
			$("#items a.expanded").removeClass("expanded");
			$(this).addClass("expanded");
			$(".sub-items").filter(":visible").slideUp("normal");
			$(this).parent().children("ul").stop(true,true).slideDown("normal");
		}
	});

	$(".sub-items a").click(function(){
		$(".sub-items a").removeClass("current");
		$(this).addClass("current");
	});
});
