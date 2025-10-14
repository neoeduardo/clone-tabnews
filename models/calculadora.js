function somar(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return "erro";
  }

  if (typeof numero1 != "number" || typeof numero2 != "number") {
    return "erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
