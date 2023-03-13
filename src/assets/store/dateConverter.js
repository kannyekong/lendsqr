export const convertDate = (arg) => {
  let year = arg.getFullYear();
  let month = arg.toLocaleString("en-US", { month: "short" });
  let day = arg.getDate();
  let time = arg.toLocaleTimeString("en", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return month + "," + " " + day + " " + year + " " + time;
};
