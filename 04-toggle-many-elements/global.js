// Your JavaScript goes here.


window.addEventListener ("load", function () {

    const elements = document.querySelectorAll('.toogle_me');
    const button = document.querySelector('#button');

    var toggleStatus = false;
    button.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            element.forEach(function(element) {
                element.style.display = 'initial';
                toggleStatus = true;

            })
        }else {
            elements.forEach(function (element) {
                element.style.display = 'none';
                toggleStatus = false;
            })
        }
    })
})