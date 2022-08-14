export const getTimeString = (time: string, is24Hour: boolean): string => {
  if (time.split(':').length !== 2) return 'Invalid Time';

  const [hour, minutes] = time.split(':').map((item) => +item);

  let suffix = hour > 12 ? 'pm' : 'am';

  const newHours = !is24Hour && hour > 12 ? hour - 12 : hour;

  let newMinutes = `${minutes}`;
  if (minutes === 0) newMinutes = '00';
  if (minutes < 10) newMinutes = `0${minutes}`;

  return `${newHours}:${newMinutes} ${suffix}`;
};

export const getStringFromDate = (date: Date): string =>
  new Date(date).toLocaleString().split(',')[0];
