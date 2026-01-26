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
    "galeria/2-6.jpeg",
    "galeria/2-7.jpeg",
    "galeria/2-8.jpeg",
    "galeria/2-9.jpeg",
    "galeria/2-10.jpeg",
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
    "galeria/3-25.jpeg",
    "galeria/3-26.jpeg",
    "galeria/9-17.jpeg",
    "galeria/9-18.jpeg"
  ],
  "Local 4": [
    "galeria/4-0.jpeg",
    "galeria/4-1.jpeg",
    "galeria/4-2.jpeg",
    "galeria/4-3.jpeg",
    "galeria/4-4.jpeg",
    "galeria/4-5.jpeg",
    "galeria/4-6.jpeg",
    "galeria/4-7.jpeg",
    "galeria/4-8.jpeg",
    "galeria/4-9.jpeg",
    "galeria/4-10.jpeg",
    "galeria/4-11.jpeg",
    "galeria/4-12.jpeg",
    "galeria/4-13.jpeg",
    "galeria/4-14.jpeg",
    "galeria/4-15.jpeg",
    "galeria/4-16.jpeg"
  ],
  "Local 5": [
    "galeria/5-0.jpeg",
    "galeria/5-1.jpeg",
    "galeria/5-2.jpeg",
    "galeria/5-6.jpeg",
    "galeria/5-7.jpeg",
    "galeria/5-8.jpeg",
    "galeria/5-9.jpeg",
    "galeria/5-10.jpeg",
    "galeria/5-11.jpeg",
    "galeria/5-12.jpeg",
    "galeria/5-13.jpeg",
    "galeria/5-14.jpeg"

  ],
  "Local 6": [
    "galeria/6-0.jpeg",
    "galeria/6-1.jpeg",
    "galeria/6-2.jpeg",
    "galeria/6-3.jpeg",
    "galeria/6-4.jpeg",
    "galeria/6-5.jpeg"
  ],
  "Local 7": [
    "galeria/7-1.jpeg",
    "galeria/7-4.jpeg",
    "galeria/7-5.jpeg",
    "galeria/7-6.jpeg",
    "galeria/7-7.jpeg",
    "galeria/7-8.jpeg",
    "galeria/7-9.jpeg",
    "galeria/7-10.jpeg",
    "galeria/7-11.jpeg",
    "galeria/7-12.jpeg"

  ],
  "Local 8": [
    "galeria/8-0.jpeg",
    "galeria/8-1.jpeg",
    "galeria/8-2.jpeg",
    "galeria/8-3.jpeg",
    "galeria/8-4.jpeg",
    "galeria/8-5.jpeg",
    "galeria/8-6.jpeg",
    "galeria/8-7.jpeg",
    "galeria/8-8.jpeg",
    "galeria/8-9.jpeg",
    "galeria/8-10.jpeg",
  

  ],
  "Local 9": [
    "galeria/9-0.jpeg",
    "galeria/9-1.jpeg",
    "galeria/9-3.jpeg",
    "galeria/9-4.jpeg",
    "galeria/9-5.jpeg",
    "galeria/9-6.jpeg",
    "galeria/9-7.jpeg",
    "galeria/9-8.jpeg",
    "galeria/9-9.jpeg",
    "galeria/9-10.jpeg",
    "galeria/9-11.jpeg",
    "galeria/9-12.jpeg",
    "galeria/9-13.jpeg",
    "galeria/9-14.jpeg",
    "galeria/9-15.jpeg",
    "galeria/9-16.jpeg"
    

  ],
  "Local 10": [
    "galeria/10-0.jpeg",
    "galeria/10-1.jpeg",
    "galeria/10-2.jpeg",
    "galeria/10-3.jpeg",
    "galeria/9-2.jpeg"
  ],

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
