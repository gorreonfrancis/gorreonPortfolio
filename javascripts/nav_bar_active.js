function scrollTracker() {
  const sections = document.querySelectorAll("section[id].content"); // re-select every time
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.navbar a[href*="#${id}"]`);
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink?.classList.add("text-secondary");
    } else {
      currentNavLink?.classList.remove("text-secondary");
    }
  });
}

window.addEventListener("scroll", scrollTracker);