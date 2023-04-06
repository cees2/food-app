const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const parseHeaderDate = (date: Date) => {
  const day = days[date.getDay()];
  const monthDay = date.getDate();
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();
  return `${day}, ${monthDay} ${monthName} ${year}`;
};
