// apiScript.js
const url = 'https://icanhazdadjoke.com/';


const append = (data) => {
  const jokes = data.joke;
  const container = document.getElementById("jokeContainer");
  container.innerText = jokes;
};

const fetchJoke = async () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  await fetch(url, myObject)
    .then((response) => response.json())
    .then((data) => append(data))
    .catch((error) => console.log(error));
};

window.onload = () => fetchJoke();