const button = document.getElementById("joke-button");
const speech = document.getElementById("speech");

// functie care ia date de la API
async function getDataFromAPI() {
  const url =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit";
  let joke = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.type === "twopart") {
      joke = `${data?.setup} ... ${data?.delivery}`;
    } else if (data.type === "single") {
      joke = `${data.joke}`;
    }

    renderJoke(joke);
    tellTheJoke(joke);
    return joke;
    // console.log(joke);
  } catch (eroare) {
    console.log(eroare);
  }
}

// functie pentru a randa gluma in html div
function renderJoke(gluma) {
  speech.textContent = gluma;
}

// o alta posibilitate de a apela functia de render
// const gluma = getDataFromAPI();
// renderJoke(gluma);

//functie pentru a folosi voice rss ( se va citi gluma)
function tellTheJoke(gluma) {
  VoiceRSS.speech({
    key: "5ff4b1b6ab8143f488a977bc3a2f2a9c",
    src: gluma,
    hl: "en-us",
    v: "Mike",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

button.addEventListener("click", getDataFromAPI);

//adaugare functionalitate pt a deschide pagina About
const aboutBtn = document.getElementById("about-page-button");
aboutBtn.addEventListener("click", function () {
  window.location.href = "about.html";
});
