// Select <form> dengan id main-form
var mainForm = document.getElementById('main-form');
var inputForm = mainForm.children[0];
var labelForm = inputForm.getElementsByTagName('input');


// Tambahkan Event Listener dengan trigger submit ke <form id="main-form">
mainForm.addEventListener('submit', function() {

  for (i = 0; i < labelForm.length; i++) {

      if (labelForm[i].value === ''){
          alert(labelForm[i].getAttribute('label')+' tidak boleh kosong'); break;
      }

      switch (labelForm[i].getAttribute('label')){
        case 'password' : var password = labelForm[i].value; break;
        case 'confirmpassword' : var confpass = labelForm[i].value; break;
        case 'email' : var email = labelForm[i].value; break;
        case 'emailconfirm' : var confemail = labelForm[i].value; break;
        default: break;
      }
      if (password!=null && confpass!=null) {
        if (password!==confpass) {
         alert('Password dan Konfirmasi Tidak Sama!')
        }
      } 

    if (email!=null && confemail!=null) {
      if (email!==confemail) {
         alert('Email dan Konfirmasi Tidak Sama!')
      }
    } 

  }

  // var username = document.getElementById('username');
  // var email = document.getElementById('email');
  // var confemail = document.getElementById('emailconfirm');
  // var pass = document.getElementById('password');
  // var confpass = document.getElementById('confirmpassword');

  // if (username.value === ''||email.value === ''||confemail.value === ''||pass.value === ''||confpass.value===''){
      
  //     alert('Tidak boleh kosong!');
  //     event.preventDefault();
  // }else if (pass.value !== confpass.value || email.value !== confemail.value) {
      
  //     alert('Password dan Email harus terisi dan sama');
  //     event.preventDefault();;
  // }else {
      
  //     alert('Submit Sukses!');
  //     event.preventDefault();
  // }

});




