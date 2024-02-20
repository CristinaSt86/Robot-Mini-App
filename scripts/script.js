const button = document.getElementById("joke-button");
const speech = document.getElementById("speech");

// function to get the data from the API
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

// function to render the joke in html div
function renderJoke(gluma) {
  speech.textContent = gluma;
}

// another possbility to call the render function 
// const gluma = getDataFromAPI();
// renderJoke(gluma);

//function to use the voice rss ( the joke will be read )
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

//added functionality to open the About page
const aboutBtn = document.getElementById("about-page-button");
aboutBtn.addEventListener("click", function () {
  window.location.href = "about.html";
});
