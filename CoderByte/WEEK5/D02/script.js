// Mengakses anak dari Parent yang pertama
var div1 = document.getElementById('eldest-parent');
var anak1div1 = div1.children[0];
anak1div1.innerHTML = 'Diakses Melalui Eldest Parent';

// Mengakses langsung ke id a-child dan mengakses sodara-sodaranya
// Sodara 1
var gen3 = document.getElementById('a-child');
var sodara1 = gen3.previousElementSibling;
sodara1.innerHTML = 'Diakses Melalui a Child';

var sodara3 = gen3.nextElementSibling;
sodara3.innerHTML = 'Diakses Melalui a Child';

// Mengakses parent dari child

var bapakmuda = gen3.parentNode;
var bapaktua = bapakmuda.parentNode;
var sodarabapaktua = bapaktua.nextElementSibling;
sodarabapaktua.innerHTML = 'Diakses Melalui a Child';

    // <div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
    // <div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
    // <div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
    // <div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
