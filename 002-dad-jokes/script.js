const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  jokeEl.classList.remove("show");

  const config = {
    headers: { Accept: "application/json" },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  setTimeout(() => {
    jokeEl.innerHTML = data.joke;
    jokeEl.classList.add("show");
  }, 200);
};

generateJoke();

jokeBtn.addEventListener("click", () => generateJoke());
