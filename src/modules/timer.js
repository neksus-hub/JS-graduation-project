export const timer = (deadline) => {
  const countDays = document.querySelector(".count_1>span");
  const countHours = document.querySelector(".count_2>span");
  const countMinutes = document.querySelector(".count_3>span");
  const countSeconds = document.querySelector(".count_4>span");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining: timeRemaining,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    getTime.days < 10
      ? (countDays.textContent = `0` + getTime.days)
      : (countDays.textContent = getTime.days);

    getTime.hours < 10
      ? (countHours.textContent = `0` + getTime.hours)
      : (countHours.textContent = getTime.hours);

    getTime.minutes < 10
      ? (countMinutes.textContent = `0` + getTime.minutes)
      : (countMinutes.textContent = getTime.minutes);

    getTime.seconds < 10
      ? (countSeconds.textContent = `0` + getTime.seconds)
      : (countSeconds.textContent = getTime.seconds);

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };

  updateClock();
};
