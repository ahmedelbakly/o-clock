const hours = document.querySelector(".hour .time");
const minutes = document.querySelector(".min .time");
const second = document.querySelector(".second .time");
const AmPm = document.querySelector(".amPm span");

const oClock = () => {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let S = time.getSeconds();
  const inAmPm = h > 11 ? "Pm" : "am";
  h = h > 11 ? `0${h - 12}` : `0${h}`;
  m = m > 9 ? `${m}` : `0${m}`;
  S = S > 9 ? `${S}` : `0${S}`;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  second.innerHTML = S;
  AmPm.innerHTML = inAmPm;

  setTimeout(() => {
    return oClock();
  }, 1000);
};

oClock();
