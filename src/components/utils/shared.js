export const add = (a, b) => a + b;

export const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

export const getWeekDay = () => {
  const currentDay = new Date().getDay();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[currentDay];
};

export const getRandomNum = (callback) => {
  callback(Math.random());
  callback(Math.random());
  callback(Math.random());
};
