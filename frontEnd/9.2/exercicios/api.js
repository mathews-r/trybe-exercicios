const append = (data) => {
  const filtro = data.filter(({ rank }) => rank <= 10);
  const tratarFiltro = filtro.map(({ name, symbol, priceUsd }) => ({
    name,
    symbol,
    priceUsd,
  }));

  const container = document.getElementById("lista-cripto");

  tratarFiltro.forEach(({ name, symbol, priceUsd }) => {
    const dollar = Number(priceUsd).toFixed(2);
    const createLi = document.createElement("li");
    createLi.innerText = `${name} (${symbol}): U$: ${dollar}`;
    container.appendChild(createLi);
  });
};

const criptos = async () => {
  try {
    const coins = await fetch(`https://api.coincap.io/v2/assets`);
    const dados = await coins.json();
    append(dados.data);
  } catch (error) {
    console.log(error);
  }
};

criptos();
