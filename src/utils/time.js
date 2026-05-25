export function convertDateTimeTo24HrTime(dateTime) {
  const dateObj = new Date(dateTime);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const formattedTime = dateObj.toLocaleString(undefined, options);

  return formattedTime;
}

export function convertDateTimeToDate(dateTime, formatDate) {
  const dateFormat = formatDate || "en-GB";

  const dateObj = new Date(dateTime);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedTime = dateObj.toLocaleString(dateFormat, options);

  return formattedTime;
}