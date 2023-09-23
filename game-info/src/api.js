// basic api
const BASE_URL = `https://api.rawg.io/api/`;
const API_KEY = `3912088596c64a2da04f070061f8304d`;
// get date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
// get full date day/month/year
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// endpoit for games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${popular_games}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}${new_games}`;
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}.json?&key=${API_KEY}&dates`;
export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?&key=${API_KEY}&dates`;
// searched game
export const searchGameURL = (game_name) =>
  `https://api.rawg.io/api/games?key=${API_KEY}&search=${game_name}&page_size=9&ordering=-added`;
