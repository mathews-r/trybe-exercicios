const criptos = async () => {
  const url = `https://api.coincap.io/v2/assets`;

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((cripto) => cripto.data);
  return coins;
};

const append = async () => {
  const moeda = await criptos();

  const uList = document.getElementById("lista-cripto");

  moeda.map((coin) => {
    const createLi = document.createElement("li");
    const dollar = Number(coin.priceUsd);
    createLi.innerText = `${coin.name} (${coin.symbol}): ${dollar.toFixed(2)}`;
    uList.appendChild(createLi);
  });
};

window.onload = () => append();
