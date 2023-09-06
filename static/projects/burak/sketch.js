var textbox;
var paragraph;
var commandsCollection = ["go", "inventory"];
let locData;
let txt;
let scrollTxt = [];
let scrollCmd;
let sc;
let reqDocText = [];
let playerInventory = [];
let s = 59;
let m = 14;


function preload() {
  locData = loadJSON("locations.json");
}


function setup() {
  noCanvas();
  textbox = createInput();
  textbox.size(500);
  textbox.id('textbox');
  txt = textbox.value().toLowerCase();
  scrollCmd = createDiv();
  scrollCmd.id('scrollCmd');
  inventoryBox = createDiv();
  inventoryBox.id('inventoryBox');
  paragraph = createP('>Type "start" to play.');
  paragraph.id('paragraph');
  timer = createDiv();
  timer.id('timer');
  subTitle=createDiv();
  subTitle.id('subTitle');
  subTitle.html("A Frustrating Experience by Burak Türköz");
  playerState.loc = locationType.start;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  timer.html(m + ":" + s);
  if (frameCount % 60 == 0 && s >= 0 && m >= 0) {
    s--;
    if (s < 0) {
      s = 59;
      m--;
    }
  }
  if (m == 0 && s == 0) {
    timer.html("Game Over");
    gameOver();
    m = 0;
    s = 0;
    noLoop();
  }
}

function keyPressed() {
  if (key == 'Enter') {
    txt = textbox.value().toLowerCase();
    inputEvent();
    console.log(playerState.loc);
    textbox.value('');
  }
}

function inputEvent() {
  paragraph.html(">" + txt);
  var command = txt.split(" ")[0];
  if (playerState.loc == 0) { //starting screen
    switch (command) {
      case "start":
        sc = locData.places[0].intro;
        break;
      case "ask":
        if (txt == "ask for workplace operation permit") {
          sc = locData.places[0].responses[1];
        } else {
          sc = locData.places[0].responses[0];
        }
        break;
      case "exit":
        exitLoc();
        break;
      default:
        sc = locData.places[0].responses[0];
    }
  } else if (playerState.loc == 1) {
    switch (command) {
      case "go":
        changeLoc(txt);
        break;
      default:
        sc = "You cannot do that here. Try going to a government office.";
    }
  } else {
    switch (command) {
      case "ask":
        askFor(txt);
        if (playerInventory.includes("workplace_operation_permit")) {
          endScreen();
        }
        break;
      case "give":
        giveDoc(txt);
        break;
      case "exit":
        exitLoc(txt);
        break;
      case "wait":
        waitInLine(txt);
        break;
      case "go":
        sc = "You are still in a government office."
        break;
      default:
        sc = (locData.miscResponses[int(random(locData.miscResponses.length))]);
    }
  }
  scrollTxt.push("<br>" + sc);
  document.getElementById('scrollCmd').innerHTML = "<p>" + scrollTxt.join("<br/>") + "</p>";
  const autoScroll = document.getElementById('scrollCmd');
  autoScroll.scrollTop = autoScroll.scrollHeight;
}

function changeLoc(input) {
  switch (input) {
    case "go to department of financial services":
      playerState.loc = locationType.finServ;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to ministry of labor":
      playerState.loc = locationType.minLab;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to municipal office":
      playerState.loc = locationType.municipal;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to national tax adminstration":
      playerState.loc = locationType.natTax;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to regional labor association":
      playerState.loc = locationType.regLab;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to chamber of commerce":
      playerState.loc = locationType.chaCom;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to union of bakers and food workers":
      playerState.loc = locationType.uniBak;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to general directorate of security affairs":
      playerState.loc = locationType.genDirSec;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to bureau of population adminstration":
      playerState.loc = locationType.burPop;
      sc = (locData.places[playerState.loc].intro);
      break;
    case "go to social insurance bureau":
      playerState.loc = locationType.socInc;
      sc = (locData.places[playerState.loc].intro);
      break;
  }
}

function askFor(input) {
  if (locData.places[playerState.loc].valid_inputs.indexOf(input) == -1) { //checking the validity of responses
    sc = (locData.places[playerState.loc].responses[3]);
  } else {
    checkInventory();
    if (checkInventory() == true) {
      sc = (locData.places[playerState.loc].responses[2]);
      playerInventory.push(locData.places[playerState.loc].gives_docs[0].name);
      document.getElementById('inventoryBox').innerHTML = "<p>" + playerInventory.join("<br/>") + "</p>";
      console.log("player inventory:");
      console.log(playerInventory);
    } else {
      checkReqDoc();
      sc = ((locData.places[playerState.loc].responses[1]) + "<br>" + reqDocText.join(""));
      reqDocText = [];
    }
  }
}

function checkReqDoc() {
  for (let i = 0; i < locData.places[playerState.loc].req_docs.length; i++) {
    reqDocText.push("> " + (locData.places[playerState.loc].req_docs[i].nameType) + " from " + locData.places[playerState.loc].req_docs[i].loc + "<br>");
  }
}

function checkInventory() {
  let counter = 0;
  for (let i = 0; i < locData.places[playerState.loc].req_docs.length; i++) {
    if (locData.places[playerState.loc].inventory.includes(locData.places[playerState.loc].req_docs[i].name)) {
      counter++;
    }
  }
  if (counter == locData.places[playerState.loc].req_docs.length) {
    return true;
  } else {
    return false;
  }
}

function giveDoc(input) {
  if (locData.places[playerState.loc].valid_inputs.indexOf(input) == -1) { //checking the validity of responses
    sc = (locData.places[playerState.loc].responses[5]);
  } else {
    if (playerInventory.includes(locData.docs[locData.docsCommands.indexOf(input)])) {
      sc = (locData.places[playerState.loc].responses[4]);
      locData.places[playerState.loc].inventory.push(locData.docs[locData.docsCommands.indexOf(input)]);
      console.log(locData.places[playerState.loc].inventory);
    } else {
      sc = "You do not have this document in your inventory.";
    }
  }
}

function exitLoc() {
  playerState.loc = locationType.outside;
  sc = (locData.places[playerState.loc].intro);
}

function endScreen() {
  endText = createDiv();
  endText.id('endText');
  endText.html("Congratulations. You got your workplace operation permit in time.<br><br>You are legally allowed to open traditional Zarowkan bakery.<br><br>Prepare for mandatory workplace inspection by regional authorities.<br><br><br>You have one week.");
}

function gameOver() {
  gameOverText = createDiv();
  gameOverText.id('gameOverText');
  gameOverText.html("You could not get your workplace operation permit in time.<br><br>You are sent back to the municipal waiting list.<br><br>Your dreams will have to wait another 8 years 5 months.");
}

