export const formatLocaleDate = (date: Date | string): string => {
  const dateObj = new Date(date);
  
  const day = dateObj.getUTCDate();
  const month = dateObj.toLocaleString("id-ID", { month: "long" });
  const year = dateObj.getUTCFullYear();

  return `${day} ${month} ${year}`;
};
