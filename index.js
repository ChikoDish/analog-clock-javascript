const deg = 6;
/* const hour = $("#hr").val();
const min = $("#min").val();
const sec = $("#sec").val(); */
const hour = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
setInterval(() => {
  let time = new Date();
  let h = time.getHours() * 30;
  let m = time.getMinutes() * deg;
  let s = time.getSeconds() * deg;

  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  sec.style.transform = `rotateZ(${s}deg)`;
});
