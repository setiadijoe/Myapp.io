var headerElements = document.getElementById("fill-me");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var paragrafElements = document.getElementsByClassName("change-all-of-me");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h2");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

headerElements.innerHTML= 'HALO!';
// paragrafElements.innerHTML = 'HALO JUGA';

for(var i = 0; i < paragrafElements.length; i++) {
  var currentparagrafElements        = paragrafElements[i];
  var currentparagrafElementscontent  = currentparagrafElements.innerHTML = 'HALO JUGA!';
    console.log('isi <p class="change-all-of-me"> index ke ' + i + ': ' + currentparagrafElementscontent);
}

pageHeadings[0].innerHTML = 'Apa Kabar!';
