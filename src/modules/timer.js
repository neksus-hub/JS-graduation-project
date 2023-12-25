export const timer = (deadline) => {
  const countDays = document.querySelectorAll(".count_1>span");
  const countHours = document.querySelectorAll(".count_2>span");
  const countMinutes = document.querySelectorAll(".count_3>span");
  const countSeconds = document.querySelectorAll(".count_4>span");

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

    countDays.forEach((item) => {
      getTime.days < 10
        ? (item.textContent = `0` + getTime.days)
        : (item.textContent = getTime.days);
    });

    countHours.forEach((item) => {
      getTime.hours < 10
        ? (item.textContent = `0` + getTime.hours)
        : (item.textContent = getTime.hours);
    });

    countMinutes.forEach((item) => {
      getTime.minutes < 10
        ? (item.textContent = `0` + getTime.minutes)
        : (item.textContent = getTime.minutes);
    });

    countSeconds.forEach((item) => {
      getTime.seconds < 10
        ? (item.textContent = `0` + getTime.seconds)
        : (item.textContent = getTime.seconds);
    });

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };

  updateClock();
};
