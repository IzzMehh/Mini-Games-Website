import { amountInputEvent } from "./input.js";
import { userClickDiv } from "./userChoice.js";
import { betButtonLogic } from "./betButton.js";
import { GameModeToggler } from "./gameModeToggle.js";
import { readedInfo } from "./continue.js";


export let kenoDataStored = accountStoredData


readedInfo()
betButtonLogic()
userClickDiv()
amountInputEvent()
GameModeToggler()
