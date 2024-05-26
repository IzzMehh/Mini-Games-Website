export const displayDiv = document.querySelector("#start-display");

let div

export async function HandelDiv(text, display) {
  displayDiv.classList.add("mode-display-style");
  displayDiv.style.display = `${display}`;
  if (div==null) {
    div = document.createElement("div");
    displayDiv.appendChild(div);
  }

  div.innerText = "";
  div.innerText = `${text}`;
  div.classList.add("mode-display-text");
}
