(function () {
  const tekstai = window.frazes;

  istraukiamPaveiksliuku();

  let atsitiktinisTekstas = atrinkTeksta(tekstai);

  keiciamTeksta(atsitiktinisTekstas);
})();

/**
 * Priskirs elementui nauja teksta
 *
 * @param {string} tekstas
 */
function keiciamTeksta(tekstas = "noriu teksto :O") {
  let tekstoVieta = document.getElementById("tekstas");

  tekstoVieta.innerHTML = tekstas;
}

/**
 * Grazins viena teksta is masyvo
 *
 * @param {array} galimosReiksmes
 */
function atrinkTeksta(galimosReiksmes = []) {
  if (!galimosReiksmes.length) {
    return "nera iš ko rinktis";
  }

  let atstitiktineReiksme = gautAtsitiktiniSkaiciu(galimosReiksmes.length);

  return galimosReiksmes[atstitiktineReiksme];
}

/**
 * Grazins atstitiktini skaiciu iki max
 *
 * @param {number} max
 */
function gautAtsitiktiniSkaiciu(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Paveiksliuko istraukimas ir uzdejimas
 */
function istraukiamPaveiksliuku() {
  const url =
    "https://api.unsplash.com/search/photos?query=tea&per_page=20&client_id=fXFTvarfhOuq-TJo6j0-Zw5VrhksFaIOrw1IYY2oE7M";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let atsitiktinis = gautAtsitiktiniSkaiciu(data.results.length);

      let fonoBlokas = document.querySelector(".fonas");
      fonoBlokas.style.backgroundImage = `url(${data.results[atsitiktinis].urls.regular})`;

      let tekstas = document.getElementById("tekstas");
      let priesingaSpalva = invertColor(data.results[atsitiktinis].color, true);
      tekstas.style.color = priesingaSpalva;
      tekstas.style.backgroundColor = data.results[atsitiktinis].color + "88";
    });
}

function invertColor(hex, bw) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}
