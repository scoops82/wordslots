/// Import in keen-slider
import keenSlider from "https://cdn.skypack.dev/keen-slider";

/// Random number generator (at the top of the page)
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/// Random number generator (at the top of the page)
function SingleRandomNumberGenerator(min = 0, max = 26) {
  // Returns a single integer between min (0) and max (9) inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomArrGenerator(min = 0, max = 9, length = 3) {
  /// generates random integers and returns them in an array
  let count = 0;
  const arr = [];
  while (count < length) {
    arr.push(SingleRandomNumberGenerator(min, max));
    count += 1;
  }
  return arr;
}

document.querySelector(".info").textContent = letters.join(" ");

// const doors = document.querySelectorAll(".door");
// document.querySelector("#spinner").addEventListener("click", spin);
// document.querySelector("#reseter").addEventListener("click", init);

async function spin() {
  init(false, 1, 2);
  for (const door of doors) {
    const boxes = door.querySelector(".boxes");
    const duration = parseInt(boxes.style.transitionDuration);
    boxes.style.transform = "translateY(0)";
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
  }
}

// function init(firstInit = true, groups = 1, duration = 1) {
//   for (const door of doors) {
//     if (firstInit) {
//       door.dataset.spinned = "0";
//     } else if (door.dataset.spinned === "1") {
//       return;
//     }

//     const boxes = door.querySelector(".boxes");
//     const boxesClone = boxes.cloneNode(false);

//     const pool = ["❓"];
//     if (!firstInit) {
//       const arr = [];
//       for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
//         arr.push(...letters);
//       }
//       pool.push(...shuffle(arr));

//       boxesClone.addEventListener(
//         "transitionstart",
//         function () {
//           door.dataset.spinned = "1";
//           this.querySelectorAll(".box").forEach((box) => {
//             box.style.filter = "blur(1px)";
//           });
//         },
//         { once: true }
//       );

//       boxesClone.addEventListener(
//         "transitionend",
//         function () {
//           this.querySelectorAll(".box").forEach((box, index) => {
//             box.style.filter = "blur(0)";
//             if (index > 0) this.removeChild(box);
//           });
//         },
//         { once: true }
//       );
//     }
//     // console.log(pool);

//     for (let i = pool.length - 1; i >= 0; i--) {
//       const box = document.createElement("div");
//       box.classList.add("box");
//       box.style.width = door.clientWidth + "px";
//       box.style.height = door.clientHeight + "px";
//       box.textContent = pool[i];
//       boxesClone.appendChild(box);
//     }
//     boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
//     boxesClone.style.transform = `translateY(-${
//       door.clientHeight * (pool.length - 1)
//     }px)`;
//     door.replaceChild(boxesClone, boxes);
//     // console.log(door);
//   }
// }

function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}
const shuffled = shuffle(letters);

// init();

// Generate slider slides and appends them to target element programmatically
function slideGenerator(content = letters, targetElement) {
  let slideNumber = 1;
  const frag = new DocumentFragment();
  for (const item of content) {
    const div = document.createElement("div");
    const className1 = `keen-slider__slide`;
    div.classList.add(className1);
    const className2 = `number-slide${slideNumber}`;
    div.classList.add(className2);
    div.textContent = item;
    frag.appendChild(div);
    slideNumber += 1;
  }
  targetElement.appendChild(frag);
}

function randomSlideGenerator(array = letters, targetElement) {
  const shuffled = shuffle(array);
  slideGenerator(shuffled, targetElement);
}

// Create slider_1_* slides
const player1_slider1 = document.getElementById("ks-player1-1");
slideGenerator(letters, player1_slider1);

const player1_slider2 = document.getElementById("ks-player1-2");
slideGenerator(letters, player1_slider2);

const player1_slider3 = document.getElementById("ks-player1-3");
slideGenerator(letters, player1_slider3);

const player1_slider4 = document.getElementById("ks-player1-4");
slideGenerator(letters, player1_slider4);

const player1_slider5 = document.getElementById("ks-player1-5");
slideGenerator(letters, player1_slider5);

/// create the slider 1_1
const slider_1_1 = new keenSlider("#ks-player1-1", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_1_2 = new keenSlider("#ks-player1-2", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_1_3 = new keenSlider("#ks-player1-3", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_1_4 = new keenSlider("#ks-player1-4", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_1_5 = new keenSlider("#ks-player1-5", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

console.dir(slider_1_1);

// Stores Player 1 current results
const player1ResultArr = ["?", "?", "?", "?", "?"];
const player1ResultsEl = document.getElementById("player1-result");

function updateResultsDisplay(playerResultsArr = player1ResultArr, targetEl) {
  const frag = new DocumentFragment();
  //TODO This For of loop is not working
  for (item of playerResultsArr) {
    if (item == "?") {
      const input = document.createElement("input");
      input.setAttribute("pattern", "^[a-zA-Z]$");
      input.setAttribute("autofocus");
      frag.appendChild(input);
    } else {
      const p = document.createElement("p");
      p.textContent = item;
      frag.appendChild(p);
    }
    targetEl.replaceChildren(frag);
  }
}

slider_1_1.on("animationEnded", () => {
  const currentSlide = slider_1_1.track.details.abs;
  const currentLetter = letters[currentSlide - 1];
  player1ResultArr[0] = console.log(
    "🚀 ~ file: main.js ~ line 281 ~ slider_1_1.on ~ currentSlide",
    currentSlide,
    currentLetter
  );
  updateResultsDisplay(player1ResultArr, player1ResultsEl);
});

// **** Player 1 Slider 1 buttons
// Get the ks-player1-1-full-roll element
const ks_player1_1_full_roll = document.querySelector(
  "#ks-player1-1-full-roll"
);
const ks_player1_1_nudge = document.querySelector("#ks-player1-1-nudge");

/// Create a random number generator that selects a number between 0 and 9
ks_player1_1_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = Math.floor(Math.random() * 10);
  slider_1_1.moveToIdx(ksPlayer1Index, true);
});

// Add event listener to the ks-player1-1-nudge element that will trigger the slider to go to the next slide
ks_player1_1_nudge.addEventListener("click", () => {
  slider_1_1.next();
});

// **** Player 1 Slider 2 buttons
// Get the ks-player1-2-full-roll element
const ks_player1_2_full_roll = document.querySelector(
  "#ks-player1-2-full-roll"
);
const ks_player1_2_nudge = document.querySelector("#ks-player1-2-nudge");

ks_player1_2_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_1_2.moveToIdx(ksPlayer1Index, true);
  console.log(
    "🚀 ~ file: main.js ~ line 125 ~ ks_player1_1_full_roll.addEventListener ~ ksPlayer1Index",
    ksPlayer1Index
  );
});

// Add event listener to the ks-player1-1-nudge element that will trigger the slider to go to the next slide
ks_player1_2_nudge.addEventListener("click", () => {
  slider_1_2.next();
});

// **** Player 1 Slider 3 buttons
// Get the ks-player1-2-full-roll element
const ks_player1_3_full_roll = document.querySelector(
  "#ks-player1-3-full-roll"
);
const ks_player1_3_nudge = document.querySelector("#ks-player1-3-nudge");

ks_player1_3_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_1_3.moveToIdx(ksPlayer1Index, true);
  console.log(
    "🚀 ~ file: main.js ~ line 125 ~ ks_player1_1_full_roll.addEventListener ~ ksPlayer1Index",
    ksPlayer1Index
  );
});

ks_player1_3_nudge.addEventListener("click", () => {
  slider_1_3.next();
});

// **** Player 1 Slider 4 buttons
const ks_player1_4_full_roll = document.querySelector(
  "#ks-player1-4-full-roll"
);
const ks_player1_4_nudge = document.querySelector("#ks-player1-4-nudge");

ks_player1_4_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_1_4.moveToIdx(ksPlayer1Index, true);
});

ks_player1_4_nudge.addEventListener("click", () => {
  slider_1_4.next();
});

// **** Player 1 Slider 5 buttons
const ks_player1_5_full_roll = document.querySelector(
  "#ks-player1-5-full-roll"
);
const ks_player1_5_nudge = document.querySelector("#ks-player1-5-nudge");

ks_player1_5_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_1_5.moveToIdx(ksPlayer1Index, true);
});

ks_player1_5_nudge.addEventListener("click", () => {
  slider_1_5.next();
});

// **** Player 1 Roll All Button
const ks_player1_all_full_roll = document.querySelector(
  "#ks-player1-all-full-roll"
);

ks_player1_all_full_roll.addEventListener("click", () => {
  const ksPlayer1Index1 = SingleRandomNumberGenerator();
  slider_1_1.moveToIdx(ksPlayer1Index1, true);
  const ksPlayer1Index2 = SingleRandomNumberGenerator();
  slider_1_2.moveToIdx(ksPlayer1Index2, true);
  const ksPlayer1Index3 = SingleRandomNumberGenerator();
  slider_1_3.moveToIdx(ksPlayer1Index3, true);
  const ksPlayer1Index4 = SingleRandomNumberGenerator();
  slider_1_4.moveToIdx(ksPlayer1Index4, true);
  const ksPlayer1Index5 = SingleRandomNumberGenerator();
  slider_1_5.moveToIdx(ksPlayer1Index5, true);
  console.log(
    ksPlayer1Index1,
    ksPlayer1Index2,
    ksPlayer1Index3,
    ksPlayer1Index4,
    ksPlayer1Index5
  );
});

//**  Generate Player 2 Slides **/
const player2_slider1 = document.getElementById("ks-player2-1");
randomSlideGenerator(letters, player2_slider1);

const player2_slider2 = document.getElementById("ks-player2-2");
randomSlideGenerator(letters, player2_slider2);

const player2_slider3 = document.getElementById("ks-player2-3");
randomSlideGenerator(letters, player2_slider3);

// ***** Player 2 Sliders
/// create the slider 1_1
const slider_2_1 = new keenSlider("#ks-player2-1", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_2_2 = new keenSlider("#ks-player2-2", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

const slider_2_3 = new keenSlider("#ks-player2-3", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    perView: 1,
  },
  drag: false,
  // selector: null,
  vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

// ***** Player 2 Controls
// **** Player 2 Slider 1 buttons
const ks_player2_1_full_roll = document.querySelector(
  "#ks-player2-1-full-roll"
);
const ks_player2_1_nudge = document.querySelector("#ks-player2-1-nudge");

ks_player2_1_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_2_1.moveToIdx(ksPlayer1Index, true);
});

ks_player2_1_nudge.addEventListener("click", () => {
  slider_2_1.next();
});

// **** Player 2 Slider 2 buttons
const ks_player2_2_full_roll = document.querySelector(
  "#ks-player2-2-full-roll"
);
const ks_player2_2_nudge = document.querySelector("#ks-player2-2-nudge");

ks_player2_2_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_2_2.moveToIdx(ksPlayer1Index, true);
});

ks_player2_2_nudge.addEventListener("click", () => {
  slider_2_2.next();
});

// **** Player 2 Slider 3 buttons
// Get the ks-player1-2-full-roll element
const ks_player2_3_full_roll = document.querySelector(
  "#ks-player2-3-full-roll"
);
const ks_player2_3_nudge = document.querySelector("#ks-player2-3-nudge");

ks_player2_3_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = SingleRandomNumberGenerator();
  slider_2_3.moveToIdx(ksPlayer1Index, true);
  console.log(
    "🚀 ~ file: main.js ~ line 125 ~ ks_player1_1_full_roll.addEventListener ~ ksPlayer1Index",
    ksPlayer1Index
  );
});

ks_player2_3_nudge.addEventListener("click", () => {
  slider_2_3.next();
});

// **** Player 2 Roll All Button
const ks_player2_all_full_roll = document.querySelector(
  "#ks-player2-all-full-roll"
);

ks_player2_all_full_roll.addEventListener("click", () => {
  const ksPlayer1Index1 = SingleRandomNumberGenerator();
  slider_2_1.moveToIdx(ksPlayer1Index1, true);
  const ksPlayer1Index2 = SingleRandomNumberGenerator();
  slider_2_2.moveToIdx(ksPlayer1Index2, true);
  const ksPlayer1Index3 = SingleRandomNumberGenerator();
  slider_2_3.moveToIdx(ksPlayer1Index3, true);
  console.log(ksPlayer1Index1, ksPlayer1Index2, ksPlayer1Index3);
});
