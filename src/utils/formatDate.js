export const formatTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDay = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("uk-UA", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

export const formatShortDay = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleDateString("uk-UA", { weekday: "short", day: "numeric" });
};
