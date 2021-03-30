window.addEventListener("load", function() {
    const hide_me = document.querySelectorAll(".show_me");
    const button = document.querySelector("#button");
    
    
    button.addEventListener('click', function(e){
        hide_me.forEach(function(element) {
            element.style.display = "initial";
        })
    })


})