!function($){var home={init:function(){},insertArticles:function(results){for(var str="",i=0;i<results.length;i++)str+='<article class="normal-article" data-article-id="'+results[i].articleId+'"><div class="normal-article-wrap clearfix"><div class="normal-banner"><a href="/getArticle?articleId='+results[i].articleId+'"><img src="'+results[i].bannerUrl+'"></a></div><div class="normal-text-wrap"><h1><a href="/getArticle?articleId='+results[i].articleId+'" class="title">'+results[i].title+'</a></h1><div class="article-meta"><i class="fa fa-user" aria-hidden="true"></i><span class="author-name">'+results[i].authorName+'</span><i class="fa fa-tag" aria-hidden="true"></i><span class="category">'+results[i].category+'</span><i class="fa fa-calendar" aria-hidden="true"></i><time>'+results[i].created+'</time></div><div class="text"><p>'+results[i].content+'</p></div><div class="continue-reading"><a href="/getArticle?articleId='+results[i].articleId+'">继续阅读</a></div></div></div></article>';$(".articles").append(str)},bindEvent:function(){$(window).on("scroll",function(){var scrollTopHeightAfter=parseFloat($(window).scrollTop()),browserHeight=parseFloat($(window).height());if(parseFloat($(document).height())-browserHeight-scrollTopHeightAfter<=100){var created=new Date($("article").last().find("time").text()).getTime()/1e3;$.ajax({type:"get",url:"/getMoreArticles?created="+created,async:!1,success:function(msg){if("null"===msg)return!1;home.insertArticles(JSON.parse(msg))}})}})}};home.init(),home.bindEvent()}(jQuery);
//# sourceMappingURL=home.js.map
