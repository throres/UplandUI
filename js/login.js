
if ($(".ie8").length != 1) {
   $('input').placeholder();   
}

$('#failure-text').addClass('callout left');

function showAlert() {
$('#failure-text').text('We could not sign you in. Make sure your user name and password are correct, and then try again.');
var unOffset = $('#Username').offset();
	var offsetLeft = unOffset.left - 320;
        var offsetTop = unOffset.top - 18;
        $('#failure-text').css('left',offsetLeft);
        $('#failure-text').css('top',offsetTop);
	$('#failure-text').show();

	$('#Username').keyup(function () { 
		$('#failure-text').fadeOut(300);
	});
		
	$('#Password').keyup(function () { 
		$('#failure-text').fadeOut(300);
	});
	
$('#failure-text').show();

}


$(function() {

$('#Password').val('Password');

$('#Username').focus(function() {
    $(this).css('border','2px solid #3498DB');
    $('.username-img').css('transition','all 0.4s ease-out 0s');
    $('.username-img').css('border','2px solid #3498DB');
    $('.username-img').find('span').css('color','#3498DB');
});


$('input[type="Password"]').focus(function() {
    $(this).css('border','2px solid #3498DB');
    $('.password-img').css('transition','all 0.4s ease-out 0s');
    $('.password-img').css('border','2px solid #3498DB');
    $('.password-img').find('span').css('color','#3498DB');
});


$('#Username').blur(function() {
    $(this).css('border','2px solid #DDDDDD');
    $('.username-img').css('transition','all 0.4s ease-out 0s');
    $('.username-img').css('border','2px solid #DDDDDD');
    $('.username-img').find('span').css('color','#9E9E9E');
});

$('input[Type="Password"]').blur(function() {
    $(this).css('border','2px solid #DDDDDD');
    $('.password-img').css('transition','all 0.4s ease-out 0s');
    $('.password-img').css('border','2px solid #DDDDDD');
    $('.password-img').find('span').css('color','#9E9E9E');
});

$('#Username').focus();

});