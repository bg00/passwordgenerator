//DOM content

var body = document.body;

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var contentEl = document.createElement("div");
var lowerboxEl = document.createElement("input");
var lowerboxLab = document.createElement("label");
var upperboxEl = document.createElement("input");
var upperboxLab = document.createElement("label");
var numboxEl = document.createElement("input");
var numboxLab = document.createElement("label");
var specboxEl = document.createElement("input");
var specboxLab = document.createElement("label");
var pwareaEl = document.createElement("div");
var form = document.createElement("form");
var button1 = document.createElement("button");
var button2 = document.createElement("button");

h1El.textContent = "Password Generator";
h2El.textContent = "Create a Password";
form.textContent = "Your Secure Password";
button1.textContent = "Generate Password";
button2.textContent = "Copy to Clipboard";

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(contentEl);
body.appendChild(pwareaEl);
contentEl.appendChild(lowerboxEl);
lowerboxLab.appendChild(document.createTextNode('Lowercase Letters'));
contentEl.appendChild(lowerboxLab);
contentEl.appendChild(upperboxEl);
upperboxLab.appendChild(document.createTextNode('Uppercase Letters'));
contentEl.appendChild(upperboxLab);
contentEl.appendChild(numboxEl);
numboxLab.appendChild(document.createTextNode('Numbers'));
contentEl.appendChild(numboxLab);
contentEl.appendChild(specboxEl);
specboxLab.appendChild(document.createTextNode('Special Characters'));
contentEl.appendChild(specboxLab);
pwareaEl.appendChild(form);
pwareaEl.appendChild(button1);
pwareaEl.appendChild(button2);

body.setAttribute("style", "text-align: center")
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:left; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
contentEl.setAttribute("style", "padding: 20px; background: green; align:left font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");

lowerboxEl.setAttribute("type", "checkbox");
upperboxEl.setAttribute("type", "checkbox");
numboxEl.setAttribute("type", "checkbox");
specboxEl.setAttribute("type", "checkbox");

lowerboxLab.setAttribute("style", "padding: 10px; margin: 10px; background: green; font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
upperboxLab.setAttribute("style", "padding: 10px; margin: 10px; background: green; font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
numboxLab.setAttribute("style", "padding: 10px; margin: 10px; background: green; font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
specboxLab.setAttribute("style", "padding: 10px; margin: 10px; background: green; font-color: white; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");

pwareaEl.setAttribute("style", "padding: 20px; font-color: white; background: green; align:left font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
button1.setAttribute("style", "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");
form.setAttribute("style", "padding-top: 100px; border: 3px dashed white; height: 150px; width: 400px; color: white; margin: auto; text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;")
button2.setAttribute("style", "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;");

// responsive design

function checkBreakPoint() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    toggleNavLocation(w);
}

function toggleNavLocation(screensize) {
    if (screensize > 999) {
        if (mainNav.parentElement.id === 'h1') {
            branding.appendChild(body);
        }
    } else {
        if (mainNav.parentElement.id === 'div') {
            tieredHeader.appendChild(body);
        }
    }
}

// pw generator script