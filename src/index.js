(function () {
  const tekstai = window.frazes;

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
