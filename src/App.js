import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { fetchArticles } from "./api";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./containers/Home";
import DashboardPage from "./containers/Dashboard";

const App = (pros) => {
  const [articles, setArticals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    (async () => {
      const link =
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=2d5e7e1eeac04b1c8a64086b34f96446";
      setLoading(true);
      const articles = await fetchArticles(link);
      setArticals(articles);
      setLoading(false);
    })();
  }, []);

  const onSourceChangeHandler = async (value) => {
    if (!value) {
      return;
    }
    setLoading(true);
    const url = `https://newsapi.org/v2/everything?pageSize=50&sources=${value}&apiKey=2d5e7e1eeac04b1c8a64086b34f96446`;
    const articles = await fetchArticles(url);
    setArticals(articles);
    setLoading(false);
  };

  const onCategoryChangeHandler = async (value) => {
    if (!value) {
      return;
    }
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?pageSize=50&category=${value}&apiKey=2d5e7e1eeac04b1c8a64086b34f96446`;
    const articles = await fetchArticles(url);
    setArticals(articles);
    setLoading(false);
  };

  const onCountryChangeHandler = async (value) => {
    if (!value) {
      return;
    }
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?pageSize=50&country=${value}&apiKey=2d5e7e1eeac04b1c8a64086b34f96446`;
    const articles = await fetchArticles(url);
    setArticals(articles);
    setLoading(false);
  };

  const inputChangeHandler = (value) => {
    setTerm(value);
  };

  const onSearchHandler = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/everything?q=${term}&pageSize=50&apiKey=2d5e7e1eeac04b1c8a64086b34f96446`;
    const articles = await fetchArticles(url);
    setArticals(articles);
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="conatainer">
        <NavBar
          onSourceChangeHandler={onSourceChangeHandler}
          onCategoryChangeHandler={onCategoryChangeHandler}
          onCountryChangeHandler={onCountryChangeHandler}
          onSearchHandler={onSearchHandler}
          inputChangeHandler={inputChangeHandler}
        />

        <Switch>
          <Route
            path="/"
            exact
            render={() => <HomePage articles={articles} isLoading={loading} />}
          />
          <Route path="/dashboard" exact render={() => <DashboardPage />} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
