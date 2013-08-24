$(document).click(function() {
    if($('#search-input').is(":visible"))
     {
	$('#search-input').toggle('fast');
        $('#search-icon').css("color","#00668E"); 
     }
});

$("#search-icon").click(function(e) {
    if($('#search-input').is(":visible"))
     {
        $('#search-icon').css("color","#00668E"); 
     }
     else
     {
        $('#search-icon').css("color","#ffffff"); 
     }
    $('#search-input').toggle('fast', function() {
    $('#search-input').focus();
    
  })
	e.stopPropagation(); 
    return false;                               
});

$("#search-input").click(function(e) {
    e.stopPropagation(); 
    return false;                       
});


// Toggle Nav2 Grouping Nodes
$(".nav2-node").click(function() {
    $(this).children(":first").toggleClass('nav2-collapsed').toggleClass('nav2-expanded');
	$(this).next("ul").toggleClass('nav2-collapsed').toggleClass('nav2-expanded');
});

// Select link nodes
$("li.nav2-node").click(function() {
    $("li.nav2-node").removeClass("nav2-link-selected");
	$(this).addClass("nav2-link-selected");
});

// Select single link nodes
$("li.nav2-node-single").click(function() {
    $("li.nav2-node-single").removeClass("nav2-single-link-selected");
	$(this).addClass("nav2-single-link-selected");
});

// Select nav1 icons
$(".nav1-node").click(function() {
    $(".nav1-node").parent().removeClass("notch");
	$(".nav1-node").parent().removeClass("selected");
	$(this).parent().addClass("selected");
	$(this).parent().addClass("notch");
	
	// show proper nav2 div
	var nonprefix = $(this).attr("id").substr($(this).attr("id").indexOf("-") + 1);
	$(".nav2-sub").hide();
	var nav2id = "#nav2-" + nonprefix;
	$(nav2id).fadeIn(300);
	
});

// pin and unpin
$("#nav2-pin").click(function() {
    $(this).toggleClass('nav2-pinned').toggleClass('nav2-unpinned');
});




$(document).ready(function() {
    $('#nav1> ul > li > span').tooltip({
     'delay': { show: 1000, hide: 0 },
	 placement:'right'
});
});


// show pin on hover of nav2
$("#nav2").mouseover(function() {
    $("#nav2-pin").show();
  }).mouseout(function(){
    $("#nav2-pin").hide();
});



// Slim scroll code.  To reference elements, see the prototype
(function() {
  'use strict';
  
  function setScrollbars() {
    var $sn = $('#nav2');
  
    $sn.slimScroll({
      height: $sn.height(),
      width: $sn.width(),
	  borderRadius:"none"
    });
    
    var $ss = $('#navigation-wrapper').find('.slimScrollDiv');
    var $sb = $ss.find('.slimScrollBar');
  
    $ss.css('left', '50px');
    $sn.css('left', '0');
	$sn.css('top', '0');
    $sb.css('z-index', 1001);
  
    $(window).resize(function () {
      var height = $('#nav1').height();
      $ss.height(height);
      $sn.height(height);
    });
  }
  
  $(function(){
	setScrollbars(); // before you call this, make sure sub-nav is loaded and jquery + slimscroll is loaded
  });
})();





