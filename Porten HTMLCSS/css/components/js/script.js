function openNav() {
  document.querySelector(".header_list").style.width = "25rem";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".header_list").style.width = "0rem";
}

/// STICKY NAVIGATION
const HeaderEl = document.querySelector(".first");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(HeaderEl);
