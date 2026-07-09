document.getElementById("year").textContent = new Date().getFullYear();

// theme toggle
var toggleBtn = document.getElementById("theme-toggle");
var root = document.documentElement;

function syncToggleIcon() {
  toggleBtn.textContent = root.getAttribute("data-theme") === "light" ? "☀️" : "🌙";
}
syncToggleIcon();

toggleBtn.addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  syncToggleIcon();
});

// scroll reveal
function fillSkillBars(container) {
  var fills = container.querySelectorAll(".skill-fill");
  fills.forEach(function (fill) {
    fill.style.width = fill.getAttribute("data-width") + "%";
  });
}

var revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          fillSkillBars(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(function (el) {
    observer.observe(el);
  });
} else {
  revealEls.forEach(function (el) {
    el.classList.add("in-view");
    fillSkillBars(el);
  });
}

// active nav link on scroll
var navLinks = document.querySelectorAll("nav a");
var sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window && sections.length) {
  var navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = document.querySelector('nav a[href="#' + entry.target.id + '"]');
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) {
            l.classList.remove("active");
          });
          link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach(function (section) {
    navObserver.observe(section);
  });
}
