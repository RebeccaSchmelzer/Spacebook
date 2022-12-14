import {v4 as uuid} from 'uuid';
import {nasaLogo} from '../assets/img';
import {Image, ImageFromAPI} from '../types/image';

const randomLikes = () => Math.floor(Math.random() * 150);

// the following function simulates a database query where the data would come back with an ID and an user
export const processData = (data: ImageFromAPI[]): Image[] =>
  data
    .filter((obj) => obj.media_type === 'image')
    .reverse()
    .map((image) => ({
      ...image,
      likes: randomLikes(),
      id: uuid(),
      isSaved: false,
      user: {
        username: 'nasa',
        picture: nasaLogo,
      },
    }));

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const backToTop = (): void => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export const substractTenDays = (date: string): string =>
  new Date(Date.parse(date) - 864000000).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
// 864000000 is the number of milliseconds in ten days