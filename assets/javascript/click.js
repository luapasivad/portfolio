$(document).ready(function() {

    var about = $('#about'),
        work = $('#work'),
        contact = $('#contact'),
        start = false,
        currentTitle = "",
        currentTitle = ""
        clicked = ""


    $('#nav-container').on('click', 'h4', function() {
        if (start == false)
        $('#filler-space').addClass('banner')
        $('#filler-space').removeClass('filler-space')
        start=true
        setTimeout(function() {
            $('#filler-space').addClass('hidden')}, 499)
    })

    about.on('click', function() {
        currentTitle = $(this).attr('data-path')
        currentPage = 'about-content.html'
        if(clicked != currentTitle) {
            clicked = currentTitle

            createPage(currentTitle, currentPage)

            
            $('#about-content').addClass('title-animation-open')
            $('#about-content').removeClass('hidden')
            
        } else {
            
            
        }
    })
    // on load animation for content page
    work.on('click', function() {
        currentTitle = $(this).attr('data-path')
        currentPage = 'work-content.html'
        $('#whole').addClass('click-about')
        if(clicked != currentTitle) {
            clicked = currentTitle

            createPage(currentTitle, currentPage)
        }
    })

    contact.on('click', function() {
        currentTitle = $(this).attr('data-path')
        currentPage = 'contact-content.html'
        if(clicked != currentTitle) {
            clicked = currentTitle

            createPage(currentTitle, currentPage)
        }
    })

        function createPage(title, page) {
            if(start==true) {

                $('#title').removeClass('title-animate-open')
                $('#title').addClass('title-animate-close')

                $('#content').removeClass('content-animate-open')
                $('#content').addClass('content-animate-close')

                setTimeout(function() {
                    $('#title').text(title)
                    $('#content').load(page)
                    
                    $('#title').removeClass('title-animate-close')
                    $('#title').addClass('title-animate-open')

                    $('#content').removeClass('content-animate-close')
                    $('#content').addClass('content-animate-open')
                }, 600)
            } 
            else {
                $('#title').text(title)
                $('#content').load(page)

                $('#title').addClass('title-animate-open')     
                $('#content').addClass('content-animate-open') 
            }

            
        }
    })