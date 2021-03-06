var body = window.document.getElementsByTagName("body")[0];

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var contentEl = document.createElement("div");
var checkbox1El = document.createElement("div");
var lowerboxEl = document.createElement("input");
var lowerboxLab = document.createElement("label");
var crspEl1 = document.createElement("p");
var checkbox2El = document.createElement("div");
var upperboxEl = document.createElement("input");
var upperboxLab = document.createElement("label");
var crspEl2 = document.createElement("p");
var checkbox3El = document.createElement("div");
var numboxEl = document.createElement("input");
var numboxLab = document.createElement("label");
var crspEl3 = document.createElement("p");
var checkbox4El = document.createElement("div");
var specboxEl = document.createElement("input");
var specboxLab = document.createElement("label");
var crspEl4 = document.createElement("p");
var lengEl = document.createElement("div");
var inlengLab = document.createElement("label");
var inlengEl = document.createElement("input");
var pwareaEl = document.createElement("div");
var userPassword = document.createElement("p");
var generateButton = document.createElement("button");
var copyButton = document.createElement("button");

h1El.textContent = "Password Generator";
h2El.textContent = "Create a Password";
userPassword.textContent = "Your Secure Password";
generateButton.textContent = "Generate Password";
copyButton.textContent = "Copy to Clipboard";
crspEl1.textContent = "  |   ";
crspEl2.textContent = "  |   ";
crspEl3.textContent = "  |   ";
crspEl4.textContent = "  |   ";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(contentEl);
body.appendChild(pwareaEl);
contentEl.appendChild(lowerboxEl);
lowerboxLab.appendChild(document.createTextNode("Lowercase Letters"));
contentEl.appendChild(lowerboxLab);
contentEl.appendChild(crspEl1);
contentEl.appendChild(upperboxEl);
upperboxLab.appendChild(document.createTextNode("Uppercase Letters"));
contentEl.appendChild(upperboxLab);
contentEl.appendChild(crspEl2);
contentEl.appendChild(numboxEl);
numboxLab.appendChild(document.createTextNode("Numbers"));
contentEl.appendChild(numboxLab);
contentEl.appendChild(crspEl3);
contentEl.appendChild(specboxEl);
specboxLab.appendChild(document.createTextNode("Special Characters"));
contentEl.appendChild(specboxLab);
contentEl.appendChild(crspEl4);
contentEl.appendChild(inlengEl);
inlengLab.appendChild(
  document.createTextNode("Indicate length between 8 and 128")
);
contentEl.appendChild(inlengLab);
pwareaEl.appendChild(userPassword);
pwareaEl.appendChild(generateButton);
pwareaEl.appendChild(copyButton);

body.setAttribute("style", "margin: auto; text-align: center");
h1El.setAttribute(
  "style",
  "margin:auto; width:50%; text-align:center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
h2El.setAttribute(
  "style",
  "margin:auto; width:100%; text-align:left; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
contentEl.setAttribute(
  "style",
  "margin:auto; padding: 30px; background: green; align:left font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);

lowerboxEl.setAttribute("type", "checkbox");
upperboxEl.setAttribute("type", "checkbox");
numboxEl.setAttribute("type", "checkbox");
specboxEl.setAttribute("type", "checkbox");
inlengEl.setAttribute("type", "number");
userPassword.setAttribute("type", "p");

lowerboxLab.setAttribute(
  "style",
  "font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
upperboxLab.setAttribute(
  "style",
  "font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
numboxLab.setAttribute(
  "style",
  "font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
specboxLab.setAttribute(
  "style",
  "font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
inlengLab.setAttribute(
  "style",
  "font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);

pwareaEl.setAttribute(
  "style",
  "margin: auto; font-color: white; background: green; align:left font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
generateButton.setAttribute(
  "style",
  "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
userPassword.setAttribute(
  "style",
  "border: 3px dashed white; height: auto; width: auto; color: white; margin: auto; padding: 20px; text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
copyButton.setAttribute(
  "style",
  "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);

// pw generator script

document.addEventListener("load", function() {
  function generate() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz",
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers = "0123456789",
      punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
      lowercaseInput = document.getElementById("lowerboxEl"),
      uppercaseInput = document.getElementById("upperboxEl"),
      punctuationInput = document.getElementById("specboxEl"),
      numbersInput = document.getElementById("numboxEl"),
      lengthInput = document.getElementById("inlengEl"),
      copyButton = document.getElementById("copyButton"),
      plength,
      userPassword = document.getElementById("userPassword"),
      passwordCharSet = "";

    if (lowercaseInput.checked) {
      passwordCharSet += lowercase;
    }
    if (uppercaseInput.checked) {
      passwordCharSet += uppercase;
    }
    if (punctuationInput.checked) {
      passwordCharSet += punctuation;
    }
    if (numbersInput.checked) {
      passwordCharSet += numbers;
    }
    plength = Number(lengthInput.value);

    for (var i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
      );
    }
    copyButton.setAttribute("data-clipboard-text", userPassword);
    if (userPassword == " ") {
      var alertbox = document.getElementById("alert");
      alertbox.innerHTML = "Please select an option before generating";
      alertbox.classList.add("fail");
      setTimeout(function() {
        alertbox.classList.remove("fail");
      }, 3000);
    } else {
      userPassword.textContent = userPassword;
    }
  }
  generateButton.addEventListener("click", generate);

  clipboard.on("success", function(e) {
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);
    var alertbox = document.getElementById("alert");
    alertbox.innerHTML = "Copied!";
    alertbox.classList.add("success");
    setTimeout(function() {
      alertbox.classList.remove("success");
    }, 3000);

    e.clearSelection();
  });

  clipboard.on("error", function(e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
    var alertbox = document.getElementById("alert");
    alertbox.innerHTML = "Try select the text to copy";
    alertbox.classList.add("fail");
    setTimeout(function() {
      alertbox.classList.remove("fail");
    }, 3000);
  });
});

// responsive design

function checkBreakPoint() {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  toggleNavLocation(w);
}

function toggleNavLocation(screensize) {
  if (screensize > 999) {
    if (mainNav.parentElement.id === "h1") {
      branding.appendChild(body);
    }
  } else {
    if (mainNav.parentElement.id === "div") {
      tieredHeader.appendChild(body);
    }
  }
}
