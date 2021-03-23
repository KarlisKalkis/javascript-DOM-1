# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?


Teksts atkal tiek restartēts tāpat kā iepriekš paslēpts, jo arī skripts tiek restartēts pārlādējot lapu no jauna

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Lapa nestrādās, jo JS nevarēs redzēt ievietotās HTML komandas, klases, identifikātorus un visu pārējo kas ir ievietots failā.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Šī metode ir pieļaujama kad pievieno notikuma pārvāldnieku noteiktam objektam
