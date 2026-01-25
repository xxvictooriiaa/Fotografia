const galleries = {
  "Local 1": [
    "galeria/1-1.jpeg",
    "galeria/1-2.jpeg",
    "galeria/1-3.jpeg",
    "galeria/1-4.jpeg",
    "galeria/1-5.jpeg",
    "galeria/1-6.jpeg"
  ],
  "Local 2": [
    "galeria/2-1.jpeg",
    "galeria/2-2.jpeg",
    "galeria/2-3.jpeg",
    "galeria/2-4.jpeg",
    "galeria/2-5.jpeg",
    "galeria/2-6.jpeg",
    "galeria/2-7.jpeg",
    "galeria/2-8.jpeg",
    "galeria/2-9.jpeg",
    "galeria/2-10.jpeg",
    "galeria/2-11.jpeg",
    "galeria/2-12.jpeg",
    "galeria/2-13.jpeg",
    "galeria/2-14.jpeg",
    "galeria/2-15.jpeg",
    "galeria/2-16.jpeg",
    "galeria/2-17.jpeg",
    "galeria/2-18.jpeg",
    "galeria/2-19.jpeg",
    "galeria/2-20.jpeg",
    "galeria/2-21.jpeg",
    "galeria/2-22.jpeg",
    "galeria/2-23.jpeg",
    "galeria/2-24.jpeg",
    "galeria/2-25.jpeg",
    "galeria/2-26.jpeg",
    "galeria/2-27.jpeg",
    "galeria/2-28.jpeg",
    "galeria/2-29.jpeg"
  ],
  "Local 3": [
    "galeria/3-1.jpeg",
    "galeria/3-2.jpeg",
    "galeria/3-3.jpeg",
    "galeria/3-4.jpeg",
    "galeria/3-5.jpeg",
    "galeria/3-6.jpeg",
    "galeria/3-7.jpeg",
    "galeria/3-8.jpeg",
    "galeria/3-9.jpeg",
    "galeria/3-10.jpeg",
    "galeria/3-11.jpeg",
    "galeria/3-12.jpeg",
    "galeria/3-13.jpeg",
    "galeria/3-14.jpeg",
    "galeria/3-15.jpeg",
    "galeria/3-16.jpeg",
    "galeria/3-17.jpeg",
    "galeria/3-18.jpeg",
    "galeria/3-19.jpeg",
    "galeria/3-20.jpeg",
    "galeria/3-21.jpeg",
    "galeria/3-22.jpeg",
    "galeria/3-23.jpeg",
    "galeria/3-24.jpeg",
    "galeria/3-25.jpeg"
  ]
};

document.querySelectorAll(".carousel").forEach(carousel => {
  const local = carousel.dataset.local;
  const photos = galleries[local];

  let index = 0;

  const img = carousel.querySelector("img");
  const left = carousel.querySelector(".left");
  const right = carousel.querySelector(".right");

  function update() {
    img.src = photos[index];
  }

  right.addEventListener("click", () => {
    index = (index + 1) % photos.length;
    update();
  });

  left.addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    update();
  });
});
