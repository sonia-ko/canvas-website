//  QUERY SELECTORS
const menu = document.querySelector("nav");
const navHeight = menu.getBoundingClientRect().height;
const header = document.querySelector("header");
const allSections = document.querySelectorAll(".section");

//sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) menu.classList.add("sticky");
  else menu.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// menu fade animation
const handleHover = function (e) {
  console.log(e.target);
  if (e.target.hasAttribute("href")) {
    const link = e.target;
    const siblings = link.closest("ul").querySelectorAll("a[href]");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
menu.addEventListener("mouseover", handleHover.bind(0.5));
menu.addEventListener("mouseout", handleHover.bind(1));

// revealing sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
