export function getFormattedPrice(price, currencySymbol = " €") {
  const formattedPrice =
    (price / 100).toFixed(2).replace(".", ",") + currencySymbol;

  return formattedPrice;
}

// Source: https://www.30secondsofcode.org/js/s/shuffle
export function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
