// Functionize Minecraft Fishing Start Code
let out = document.getElementById("result-img");
let codnum = document.getElementById("num-cod");
let samnum = document.getElementById("num-salmon");
let tropnum = document.getElementById("num-tropical");
let puffnum = document.getElementById("num-puffer");
let charsel = document.getElementById("character-select");
let five = document.getElementById("5fish");
let maxcod = document.getElementById("200cod");
let inventory = document.getElementById("inven");
let sort = document.getElementById("sort");
let inp = document.getElementById("inp");
let clear = document.getElementById("clear");

let cod = 0;
let sam = 0;
let trop = 0;
let puff = 0;
inventory.value = "";

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishonce);
five.addEventListener("click", runfive);
maxcod.addEventListener("click", run200);
sort.addEventListener("click", runsort);
inp.addEventListener("change", custfish);
clear.addEventListener("click", runclear);

function fishonce() {
  rand = Math.random();
  let char = charsel.value;

  if (char == "steve") {
    codLuck = 0.7;
    samLuck = 0.9;
    tropLuck = 0.95;
  } else if (char == "alex") {
    codLuck = 0.1;
    samLuck = 0.2;
    tropLuck = 0.5;
  } else if (char == "villager") {
    codLuck = 0.25;
    samLuck = 0.5;
    tropLuck = 0.75;
  }

  if (rand < codLuck) {
    out.src = "img/Raw-Cod.png";
    cod++;
    inventory.innerHTML = inventory.innerHTML + "<img src=img/Raw-Cod.png />";
  } else if (rand < samLuck) {
    sam++;
    out.src = "img/Raw-Salmon.png";
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Raw-Salmon.png />";
  } else if (rand < tropLuck) {
    trop++;
    out.src = "img/Tropical-Fish.png";
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Tropical-Fish.png />";
  } else {
    puff++;
    out.src = "img/Pufferfish.png";
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Pufferfish.png />";
  }
  codnum.innerHTML = cod;
  samnum.innerHTML = sam;
  tropnum.innerHTML = trop;
  puffnum.innerHTML = puff;
  console.log(char);
}

function runfive() {
  for (let n = 1; n <= 5; n++) {
    fishonce();
  }
}
function run200() {
  let codtarget = cod + 200;
  while (cod < codtarget) {
    fishonce();
  }
}
function custfish() {
  for (let cn = 0; cn < inp.value; cn++) {
    fishonce();
  }
}

function runsort() {
  inventory.innerHTML = "";
  for (let tc = 0; tc < cod; tc++) {
    inventory.innerHTML = inventory.innerHTML + "<img src=img/Raw-Cod.png />";
  }
  for (let ts = 0; ts < sam; ts++) {
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Raw-Salmon.png />";
  }
  for (let tt = 0; tt < trop; tt++) {
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Tropical-Fish.png />";
  }
  for (let tp = 0; tp < puff; tp++) {
    inventory.innerHTML =
      inventory.innerHTML + "<img src=img/Pufferfish.png />";
  }
}
function runclear() {
  inventory.innerHTML = "<img src='' />";
  cod = 0;
  sam = 0;
  trop = 0;
  puff = 0;
  codnum.innerHTML = cod;
  samnum.innerHTML = sam;
  tropnum.innerHTML = trop;
  puffnum.innerHTML = puff;
}
