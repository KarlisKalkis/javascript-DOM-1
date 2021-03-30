// Your JavaScript goes here.

window.addEventListener('load',function(){

    const elements = document.querySelectorAll(".second_five li");
    const button = document.querySelector('#toggle_button');

    var toggleStatus  = false
    button.addEventListener('click', function(e){
        elements.forEach(function(element){
            if (toggleStatus == false) {
                element.style.display = 'flex';
            }else {
                element.style.display = 'none';
            }
        })
        toggleStatus = !toggleStatus
    })


})