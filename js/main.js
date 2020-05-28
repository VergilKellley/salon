$(document).ready(function () {
  let $mouseX = 0,
    $mouseY = 0,
    $left = 0,
    $top = 0;

  $(document).mousemove((e) => {
    $mouseX = e.clientX;
    $mouseY = e.clientY;
  });

  setInterval(() => {
    $left += ($mouseX - $left) / 12;
    $top += ($mouseY - $top) / 12;
    $("#cursor").css({ left: $left + "px", top: $top + "px" });
  }, 30);

  let menuTl = new TimelineMax({ paused: true });

  menuTl
    .from("nav ul li", 0, { display: "none" })
    .staggerFrom("nav ul li", 0.3, { x: 40, opacity: 0 }, 0.1)
    .to(".toggler .open", 0.1, { opacity: 0 })
    .to(".toggler .close", 0.1, { opcity: 1 });

  menuTl.play();

  $(".toggler").click(() => {
    menuTl.reversed() ? menuTl.play() : menuTl.reverse();
  });

  $(document).scroll(function () {
    $(this).scrollTop() > 100 ? menuTl.reverse() : menuTl.play();
  });
});
