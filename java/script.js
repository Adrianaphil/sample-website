window.addEventListener('scroll', function () { //to make the button dissapear when in the top//
    if(window.scrollY >20){
        document.getElementById('go-to-top-button').style.display= "unset";
    }else {
        document.getElementById('go-to-top-button').style.display= "none"
    }

    }
    
});


function scrollToTop() {
    window.scrollTo(0,0); //on the page website will scroll to the top//
}