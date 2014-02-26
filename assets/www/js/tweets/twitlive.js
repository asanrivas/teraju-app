/*!
 * LiveTweets v2.0- for jQuery 1.9.1
 * Ready For Twitter API 1.1
 * http://codecanyon.net/item/live-tweets-jquery-plugin/154003
 *
 * Copyright 2013, Johan Dorper
 * You need to buy a license if you want use this script.
 * http://codecanyon.net/wiki/buying/howto-buying/licensing/
 *
 * Date: Jan 08 2011
 
 * Edit the tag variable below.
 * Any questions? hello@johandorper.com OR twitter.com/johandorper

 * LiveTweets is a JQuery plugin that lets you easily
 * load in Tweets from Twitter based on a valid Twitter
 * search operator.
 
 * Thx to Fox Junior for the timer Plugin: http://www.foxjunior.eu/
 */
(function ($) {
    $.fn.liveTweets = function (options) {

        var defaults = {
            operator: "#google", 		// Operator (Demonstration of operators: http://search.twitter.com/operators)
            liveTweetsToken: "",		// Your Live Tweets Token
            startMessages: 5, 		// Number of tweets to show at startup, max 10.
            timeBetweenTweets: 5, 	// Number of seconds between tweets that popup
            showThumbnails: true, 	// Show the thumbnail of the tweet?
            convertTextlink: true, 	// Automaticly convert text links to HTML? (Handee for bit.ly links)
            linkHashtags: true, 	// Automaticly convert hashtags to URL?
            linkUsernames: true		// Automaticly convert uvernames to URL?
        };

        var options = $.extend(defaults, options);

        return this.each(function () {
            tweetHolder = $(this);

            /* Base code */
            var tweets = [];
            var nr = 0;
            var total = 0;
            var tweetKeys = 0;
            var firstTime = false;
            var thumbSize = "small";
            var noThumbnailPath = "http://a2.twimg.com/a/1292975674/images/default_profile_2_normal.png";
            var twitterURL = "https://www.twitter.com/";
            var searchUrl = "http://livetweets.johandorper.com/Get/?callback=?&domain=" + escape(window.location.host) + "&token=" + options.liveTweetsToken + "&q=";

            var tweetTimer = false;
            var maxItems = 5;
            var blocked_user = "";

            if (options.startMessages > 5) maxItems = options.startMessages;
            if (options.startMessages > 12) maxItems = 10;

            var tag = options.operator;
            var tweetsFromSearch = searchUrl + escape(tag) + "&rpp=" + maxItems;

            var getTweets = function () {
                $.getJSON(tweetsFromSearch, function (data) {
                    $.each(data.statuses, function (key, value) {
                        if (blocked_user.toLowerCase().indexOf(value.user.name.toLowerCase()) < 0) {
                            if (tweetExists(value.id) == false) {
                                tweets[tweetKeys] = value;
                                tweetKeys++;
                            }
                        }
                    });
                    if (firstTime == false) {
                        tweets.reverse();
                        loopTweets();
                    }
                    total = tweets.length;
                });
            };

            var customize = function (operator) {
                // Set new operator(s)
                tag = operator;
                tweetsFromSearch = searchUrl + escape(tag) + "&rpp=" + maxItems;

                // Clear tweets
                $(".tweet").remove();

                // Init new tweets
                globalReset();
                getTweets();
            };

            $("#custSearch").click(function () { customize($("#keyword").val()); });


            var loopTweets = function () {
                if (firstTime == false) {
                    if (options.startMessages > 1) {
                        for (var i = 0; i < options.startMessages; i++) {
                            if (tweets[nr] != undefined) {
                                showTweet(i, 'instant');
                            }
                        }
                        nr = (i - 1);
                    } else {
                        if (tweets[nr] != undefined) {
                            showTweet(0, 'instant');
                        }
                    }

                    firstTime = true;
                    nr++;
                }

                // Only create this once...
                if (tweetTimer == false) {
                    setInterval(function() {
                    	if (tweets[nr] != undefined) {
                            showTweet(nr, 'normal');
                            nr++;
                        }
                    }, (options.timeBetweenTweets * 1000));
                    tweetTimer = true;
                }
            };

            // We check to see if a Tweet allready exists..
            var tweetExists = function (tweetId) {
                var tweetAlreadyFound = false;
                $.each(tweets, function (key, value) {
                    if (value.id == tweetId) {
                        tweetAlreadyFound = true;
                    }
                });
                return tweetAlreadyFound;
            };

            // Regular expressions for the URLs
            var formatUrl = function (text) {
                var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                return text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
            };

            var formatHashUrl = function (text) {
                var exp = /\#([a-zA-Z]+)([\s|\.\,:]+)*/g;
                return text.replace(exp, "<a target='_blank' href='https://twitter.com/#search?q=%23$1'>#$1 </a>");
            };

            var formatUserUrl = function (text) {
                var exp = /\@([a-zA-Z]+)([\s|\.\,:]+)*/g;
                return text.replace(exp, "<a target='_blank' href='https://twitter.com/$1'>@$1 </a>");
            };

            // Format URLs in tweet - optional - 
            var formatTweetMsg = function (text) {
                if (options.convertTextlink == true) {
                    text = formatUrl(text);
                }

                if (options.linkHashtags == true) {
                    text = formatHashUrl(text);
                }

                if (options.linkUsernames == true) {
                    text = formatUserUrl(text);
                }

                return text;
            };

            // Give the tweet a nice timestamp
            var formatTime = function (pastTime) {
                /* Credits to: Zemanta */
                var origStamp = Date.parse(pastTime);
                var curDate = new Date();
                var currentStamp = curDate.getTime();

                var difference = parseInt((currentStamp - origStamp) / 1000);

                if (difference < 0) return false;
                if (difference <= 60) return "Seconds ago";
                if (difference < 3600) return parseInt(difference / 60) + " minutes ago";
                if (difference <= 1.5 * 3600) return "One hour ago";
                if (difference < 23.5 * 3600) return Math.round(difference / 3600) + " hours ago";
                if (difference < 1.5 * 24 * 3600) return "One day ago";

                var dateArr = pastTime.split(' ');
                return dateArr[2] + ' ' + dateArr[1] + (dateArr[3] != curDate.getFullYear() ? ' ' + dateArr[3] : '');
            };

            // Show the tweet to the audience
            var showTweet = function (nr, displayTime) {

                if (tweets[nr] != undefined) {
                    var tweetMsg = tweets[nr].text;
                    var tweetAuthor = tweets[nr].user.name;
                    var tweetThumb = tweets[nr].user.profile_image_url;
                    var tweetDate = tweets[nr].created_at;
                    var tweetClass = "";

                    if (nr == 0) {
                        tweetClass = "first";
                    }
                    if (thumbSize == "large") {
                        tweetThumb = tweetThumb.replace("_normal", "");
                    }

                    // Set data       
                    if (tweetThumb.indexOf('default_profile') > 0) {
                        var tweetDiv = $("<div class='tweet " + tweetClass + "' id='tweet_" + tweets[nr].id + "'><img width='48' height='48' class='tweet_foto' src='" + noThumbnailPath + "'/><div class='tweet_text'><a  class='profile' target='_blank' href='" + twitterURL + tweetAuthor + "'>@" + tweetAuthor + "</a> " + formatTweetMsg(tweetMsg) + "<span>" + formatTime(tweetDate) + "</span></div></div>");
                    } else {
                        var tweetDiv = $("<div class='tweet " + tweetClass + "' id='tweet_" + tweets[nr].id + "'><img width='48' height='48' class='tweet_foto' src='" + tweetThumb + "'/><div class='tweet_text'><a class='profile' target='_blank' href='" + twitterURL + tweetAuthor + "'>@" + tweetAuthor + "</a> " + formatTweetMsg(tweetMsg) + "<span>" + formatTime(tweetDate) + "</span></div></div>");
                    }

                    tweetHolder.prepend(tweetDiv);

                    //Option
                    if (!options.showThumbnails == true) $("#tweet_" + tweets[nr].id + " img").remove();

                    if (displayTime == 'normal') {
                        $("#tweet_" + tweets[nr].id).hide().slideDown(800);
                    }

                    // Do not overload the webpage, destroy old tweets
                    if ($(".tweets div.tweet").size() > 24) {
                        var tmpTeller = 0;
                        $(".tweets div.tweet").each(function () {
                            if (tmpTeller > 4) {
                                $(this).remove();
                            }
                            tmpTeller++;
                        });
                    }
                }
            };

            var globalReset = function () {
                tweets = "";
                tweets = [];
                nr = 0;
                total = 0;
                tweetKeys = 0;
                firstTime = false;
            };

            // Init
            if(options.liveTweetsToken == "") {
            	alert("You need to create your LiveTweets token, read the documentation for more information.");
            } else {
            	getTweets();
            }
           

            // Pull request each 20 seconds
            setInterval(function() {
            	getTweets();
            }, 20000);         

        });
    };
})(jQuery);