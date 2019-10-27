var body = document.body;

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
var form = document.createElement("form");
var button1 = document.createElement("button");
var button2 = document.createElement("button");

h1El.textContent = "Password Generator";
h2El.textContent = "Create a Password";
form.textContent = "Your Secure Password";
button1.textContent = "Generate Password";
button2.textContent = "Copy to Clipboard";
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
pwareaEl.appendChild(form);
pwareaEl.appendChild(button1);
pwareaEl.appendChild(button2);

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
button1.setAttribute(
  "style",
  "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
form.setAttribute(
  "style",
  "border: 3px dashed white; height: auto; width: auto; color: white; margin: auto; padding: 20px; text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
button2.setAttribute(
  "style",
  "margin: 10px; color: white; background-color: black; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"
);
