
  window.onload = function() {
    const forms = document.forms;
    console.log(forms[0].elements);
  };

  window.onload = function() {
    const forms = document.forms;
    forms[0].name.value = "お名前を入力してください";
  };

  function confirmSubmit() {
    // ここに処理を記述
  };
  
  window.onload = confirmSubmit;

  function operateCSS() {
    const element = document.getElementsByTagName("h1")[0];
    console.log(element.className);
  };
  
  window.onload = operateCSS;

  function operateCSS() {
    const element = document.getElementsByTagName("h1")[0];
    element.className = "";
  };
  
  window.onload = operateCSS;

  function operateCSS() {
    const element = document.getElementsByTagName("h1")[0];
    element.className = "display_none";
  };
  
  window.onload = operateCSS;
  function operateCSS() {
    const element = document.getElementsByTagName("h1")[0];
    element.classList.remove("red");
  };
  
  window.onload = operateCSS;

  function emailValidation() {
    const form = document.getElementById('form');
    form.onsubmit = function(){
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");  //--追加したコード
        return false;
      }
    };
  };
  
  window.onload = emailValidation;
