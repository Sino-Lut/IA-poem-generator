function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");

  let apiKey = "96t4883dea40738f8c4oe83b37b0ab90";
  let context =
    "You are a passionate poem expert that writes about inspiring nature poems. Provide poem about morning sunshine abstract 4 lines only in HTML. Don't display title, don't display the word html and quotation marks. I want 4 line poem only ";
  let prompt = `Generate a poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
