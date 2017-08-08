var body = document.getElementById('main');

//  Membuat div di dalam div utama
var div2 = document.createElement('div');
var div2atr = document.createAttribute('id');
div2atr.value = 'content';
div2.setAttributeNode(div2atr);
body.appendChild(div2);

// Membuat div dengan class content post
var divcont = document.createElement('div');
var divcontatr = document.createAttribute('class');
divcontatr.value = 'content-post';
divcont.setAttributeNode(divcontatr);
div2.appendChild(divcont);

// Menambahkan h1
var h11 = document.createElement('h1');
var h11Text = document.createTextNode('Judul Post');
h11.appendChild(h11Text);
divcont.appendChild(h11);

// Menambahkan span
var span = document.createElement('span');
var spanText = document.createTextNode('Published on 12 May 2016');
span.appendChild(spanText);
divcont.appendChild(span);

// Menambahkan paragraf
var para1 = document.createElement('p');
var para1Text = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
para1.appendChild(para1Text);
divcont.appendChild(para1);

// Menambahkan button
var button = document.createElement('button');
var buttonatr = document.createAttribute('class');
buttonatr.value = 'share-post-btn';
var buttonText = document.createTextNode('Share this Post');
button.setAttributeNode(buttonatr);
button.appendChild(buttonText);
divcont.appendChild(button);
button.addEventListener('click', function() {
  alert('You have shared this post');
});

// Membuat div kedua dengan class content post
var divcont2 = document.createElement('div');
var divcontatr2 = document.createAttribute('class');
divcontatr2.value = 'content-post';
divcont2.setAttributeNode(divcontatr2);
div2.appendChild(divcont2);

// Menambahkan h1 yang kedua
var h12 = document.createElement('h1');
var h12Text = document.createTextNode('Judul Post 2');
h12.appendChild(h12Text);
divcont2.appendChild(h12);

// Menambahkan span kedua
var span2 = document.createElement('span');
var spanText2 = document.createTextNode('Published on 13 May 2016');
span2.appendChild(spanText2);
divcont2.appendChild(span2);

// Menambahkan paragraf kedua
var para12 = document.createElement('p');
var para1Text2 = document.createTextNode('Lorem Ipsum Dolor Sit Amet');
para12.appendChild(para1Text2);
divcont2.appendChild(para12);

// Menambahkan button kedua
var button1 = document.createElement('button');
var buttonatr1 = document.createAttribute('class');
buttonatr1.value = 'share-post-btn';
var buttonText1 = document.createTextNode('Share this Post');
button1.setAttributeNode(buttonatr1);
button1.appendChild(buttonText1);
divcont2.appendChild(button1);
button1.addEventListener('click', function() {
  alert('You have shared this post');
});