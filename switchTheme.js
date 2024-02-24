function switchTheme() {
  const html = document.documentElement;
  const img = document.querySelector("#img");
  if (html.classList.contains("light")) {
    html.classList.remove("light");
    img.setAttribute("src", "./images/avatar.png");
  } else {
    html.classList.add("light");
    img.setAttribute("src", "./images/avatar-light.png");
  }

  /* Se não tiver a classe light ele adiciona e se tiver ele tira
  html.classList.toggle("light");
  */
}
