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

  const renameTime = () => {
    const pDays = document.querySelectorAll(".current-days");
    const pHours = document.querySelectorAll(".current-hours");
    const pMinutes = document.querySelectorAll(".current-minutes");
    const pSeconds = document.querySelectorAll(".current-seconds");

    const secondFormatter = new Intl.NumberFormat("ru", {
      style: "unit",
      unit: "second",
      unitDisplay: "long",
    });

    const minutesFormatter = new Intl.NumberFormat("ru", {
      style: "unit",
      unit: "minute",
      unitDisplay: "long",
    });

    const hoursFormatter = new Intl.NumberFormat("ru", {
      style: "unit",
      unit: "hour",
      unitDisplay: "long",
    });

    const daysFormatter = new Intl.NumberFormat("ru", {
      style: "unit",
      unit: "day",
      unitDisplay: "long",
    });

    let getTime = getTimeRemaining();

    pSeconds.forEach((item) => {
      item.textContent =
        `${secondFormatter.format(getTime.seconds)}`.replace(/\d+/, "") + `:`;
    });

    pMinutes.forEach((item) => {
      item.textContent =
        `${minutesFormatter.format(getTime.minutes)}`.replace(/\d+/, "") + `:`;
    });

    pHours.forEach((item) => {
      item.textContent =
        `${hoursFormatter.format(getTime.hours)}`.replace(/\d+/, "") + `:`;
    });

    pDays.forEach((item) => {
      item.textContent =
        `${daysFormatter.format(getTime.days)}`.replace(/\d+/, "") + `:`;
    });
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
      setTimeout(renameTime, 1000);
    }
  };

  updateClock();
};
