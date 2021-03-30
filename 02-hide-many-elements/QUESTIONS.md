# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Nodefinējot .hide_me klases elementus var iegūt visus kas ir ar to saistīti html failā, un tos visus paslēpt var ar opciju :
element.style.display = "none";

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Izmantoju ciklā, tos uzreiz visus noslēpt kad tiek nospiesta poga "hide"