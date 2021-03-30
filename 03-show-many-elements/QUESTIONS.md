# DOM Atomic 03: Show Many Elements

## Questions

---

> How did you go about hiding elements initially?

Jau kad tiek ielādēta lapa klases ir nodefinētas un atliek tikai tās ar pareizajām darbībām.
Ievieojot ciklā ar darbību:
button.addEventListener('click', function(e){
        hide_me.forEach(function(element) {
            element.style.display = "initial";