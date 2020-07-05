import axios from "axios";

export const fetchSource = async () => {
  const sourceURL =
    "https://newsapi.org/v2/sources?language=en&pageSize=100&apiKey=08d1b3a92a4543b398d786fd8bdad5fc";
  try {
    const {
      data: { sources },
    } = await axios.get(sourceURL);
    return sources.map((source) => {
      return {
        id: source.id,
        name: source.name,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchArticles = async (url) => {
  try {
    const {
      data: { articles },
    } = await axios.get(url);
    return articles;
  } catch (error) {
    console.log(error);
  }
};

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;

  if (country) {
    changableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // console.log(response);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
