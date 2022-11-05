(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentState = button.getAttribute("data-state");

      if (!currentState || currentState === "closed") {
        button.setAttribute("data-state", "opened");
        button.setAttribute("aria-expanded", "true");
      } else {
        button.setAttribute("data-state", "closed");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });

  let CarouselIndicators = select("#fade-carousel-indicators");
  let carouselExampleFadeItems = select(
    "#carouselExampleFade .carousel-item",
    true
  );

  carouselExampleFadeItems.forEach((item, index) => {
    index === 0
      ? (CarouselIndicators.innerHTML +=
          "<li data-bs-target='#carouselExampleFade' data-bs-slide-to='" +
          index +
          "' class='active'></li>")
      : (CarouselIndicators.innerHTML +=
          "<li data-bs-target='#carouselExampleFade' data-bs-slide-to='" +
          index +
          "'></li>");
  });
})();

var p = document.createElement("div");
p.innerHTML =
  "<div id='preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);
function pageload() {
  var e = new Date().getTime(),
    t = (e - before) / 1e3,
    n = document.getElementById("loadingtime");
  n.innerHTML = "Page load: " + t + " seconds.";
}
(window.onload = function () {
  pageload();
}),
  setTimeout(function () {
    document.body.className += " loaded";
  }, 1500),
  document.addEventListener
    ? document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.removeEventListener(
            "DOMContentLoaded",
            arguments.callee,
            !1
          ),
            domReady();
        },
        !1
      )
    : document.attachEvent &&
      document.attachEvent("onreadystatechange", function () {
        "complete" === document.readyState &&
          (document.detachEvent("onreadystatechange", arguments.callee),
          domReady());
      });
