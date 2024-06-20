function confirmMessage() {
    if(confirm("ページが読み込まれましたか？")) { //confirm()の戻り値がtrueだった時
      alert("次にいきます");
    } else {
      alert("キャンセルされました"); //confirm()の戻り値がfalseだった時
    }
  };
  
  window.onload = confirmMessage;

  function openWindow() {
    open("https://diveintocode.jp/");
  };
  
  window.onload = openWindow;

  function replaceURL() {
    location.replace("https://diveintocode.jp/");
  };
  
  window.onload = replaceURL;

  function getElement() {
    const element = document.getElementsByTagName("h1");
    console.log(element)
  };
  
  window.onload = getElement;
  function addElement() {
    const element = document.createElement("p");
    console.log(element)
  };
  
  window.onload = addElement;

  function addElement() {
    const element = document.createElement("h2");
    element.innerText = "JavaScriptはスクリプト言語です"
    console.log(element);
  };
  
  window.onload = addElement;

  
  window.onload = addElement;

  function addElement() {
    const element = document.createElement("p");
    element.innerText = "JavaScriptはスクリプト言語です"
    const parentElement = document.getElementsByTagName("div")[0];
    const target = document.getElementsByTagName("p")[0];
    parentElement.insertBefore(element, target);
  };
  
  window.onload = addElement;

  function removeElement() {
    const parentElement = document.getElementsByTagName("div")[0];
    const target = document.getElementsByTagName("h1")[0];
    parentElement.removeChild(target);
  };
  
  window.onload = removeElement;


  function addLink() {
    const element = document.createElement("a");
    element.setAttribute("href", "https://diveintocode.jp/");
    element.innerText = "DPro";
    const parentElement = document.getElementsByTagName("div")[0];
    parentElement.appendChild(element);
  };
  
  // URLを表示する関数を追加
  function showLink() {
    const link = document.getElementsByTagName("a")[0];
    const url = link.getAttribute("href");
    console.log(url)
  }
  
  window.onload = function() {
    addLink();
    showLink();
  }
  
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
      alert("クリックされました");
    });
  };
  
  window.onload = clickBtn;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", alertClick);
  };
  
  function alertClick() {
    alert("クリックされました");
  };
  
  window.onload = clickBtn;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
      alert("クリックされました");
    });
    button.addEventListener("click", function() {
      console.log("クリックされました");
    });
  };
  
  window.onload = clickBtn;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.onclick = function() {
      alert("クリックされました");
    };
    button.onclick = function() {
      console.log("クリックされました");
    };
  };
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", alertClick);
  };
  
  function alertClick(event) {
    console.log(event)
  };
  
  window.onload = clickBtn;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", alertClick);
  };
  
  window.onload = clickBtn;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.onclick = function(e) {
      console.log(e);
    };
  };
  
  window.onload = clickBtn;