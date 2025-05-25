function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The earth is clothed with beauty",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
