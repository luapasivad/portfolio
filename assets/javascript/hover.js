$('#work').mouseover(function() {
    $('#work').removeClass('hover-leave')
    $('#work').addClass('hover')
})
$('#work').mouseleave(function() {
    console.log('working')
    $('#work').removeClass('hover')
    $('#work').addClass('hover-leave')
})

$('#about').mouseover(function() {
    $('#about').removeClass('hover-leave')
    $('#about').addClass('hover')
})
$('#about').mouseleave(function() {
    console.log('working')
    $('#about').removeClass('hover')
    $('#about').addClass('hover-leave')
})

$('#contact').mouseover(function() {
    $('#contact').removeClass('hover-leave')
    $('#contact').addClass('hover')
})
$('#contact').mouseleave(function() {
    console.log('working')
    $('#contact').removeClass('hover')
    $('#contact').addClass('hover-leave')
})