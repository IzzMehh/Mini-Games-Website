import { easyMode } from "./easyMode.js";

export const playImg = document.querySelector("#game-start-btn");

export let isGameStarted = false;

export function playImgEvent() {
  playImg.addEventListener("click", () => {
    playImg.style.display = 'none'



    toggleGameStart(true);


    easyMode();
  });
}

export function toggleGameStart(value) {
  isGameStarted = value;
}
