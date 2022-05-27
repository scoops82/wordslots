/// Import in keen-slider
import keenSlider from 'https://cdn.skypack.dev/keen-slider';

/// Random number generator (at the top of the page)
(function () {
  "use strict";

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  document.querySelector(".info").textContent = numbers.join(" ");

  const doors = document.querySelectorAll(".door");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    init(false, 1, 2);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
  }

  function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      const pool = ["❓"];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...numbers);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }
      // console.log(pool);

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
      // console.log(door);
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();

/// create the slider
const slider_1_1 = new keenSlider("#ks-player1-1", {
  loop: true,
  created: () => {
    console.log("created");
  },
  slides: {
    origin: "centre",
    perView: 1,
  },
  // selector: null,
  // vertical: true,
  // initial: 5,
  // range: {
  //   min: 0,
  //   max: 9,
  // },
});

console.log(slider_1_1.track.details.abs)

// Get the ks-player1-1-full-roll element
const ks_player1_1_full_roll = document.querySelector("#ks-player1-1-full-roll");

// console.dir(slider_1_1);

/// Create a random number generator that selects a number between 0 and 9
ks_player1_1_full_roll.addEventListener("click", () => {
  let ksPlayer1Index = 0;
  ksPlayer1Index = Math.floor(Math.random() * 10);
  slider_1_1.moveToIdx(ksPlayer1Index, false, {
    duration: 0.5,
    easing: "ease-in-out",
  });
  console.log("🚀 ~ file: main.js ~ line 125 ~ ks_player1_1_full_roll.addEventListener ~ ksPlayer1Index", ksPlayer1Index)
  console.log(slider_1_1.track.details.abs);
});






