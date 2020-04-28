import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import { fetchArticles } from './api';

import NavBar from './Components/NavBar/NavBar';
// import Footer from './Components/Footer';
import HomePage from './containers/Home';
import DashboardPage from './containers/Dashboard';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      isLoading: false,
      term: '',
    }
  }

  componentDidMount() {
    const link = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=08d1b3a92a4543b398d786fd8bdad5fc';
    this.setState({ isLoading: true });
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          articles: data.articles,
          isLoading: false
        })
      })
  }

  onSourceChangeHandler = async (value) => {
    if (!value) {
      return
    }
    this.setState({ isLoading: true });
    const url = `http://newsapi.org/v2/everything?pageSize=50&sources=${value}&apiKey=08d1b3a92a4543b398d786fd8bdad5fc`;
    const articles = await fetchArticles(url);
    this.setState({ articles: articles, isLoading: false });
  }

  onCategoryChangeHandler = async (value) => {
    if (!value) {
      return
    }
    this.setState({ isLoading: true });
    const url = `http://newsapi.org/v2/top-headlines?pageSize=50&category=${value}&apiKey=08d1b3a92a4543b398d786fd8bdad5fc`
    const articles = await fetchArticles(url);
    this.setState({ articles: articles, isLoading: false });
  }

  onCountryChangeHandler = async (value) => {
    if (!value) {
      return
    }
    this.setState({ isLoading: true });
    const url = `http://newsapi.org/v2/top-headlines?pageSize=50&country=${value}&apiKey=08d1b3a92a4543b398d786fd8bdad5fc`;
    const articles = await fetchArticles(url);
    this.setState({ articles: articles, isLoading: false });
  }

  inputChangeHandler = (value) => {
    this.setState({ term: value });
  }

  onSearchHandler = async () => {
    this.setState({ isLoading: true });
    const url = `https://newsapi.org/v2/everything?q=${this.state.term}&pageSize=50&apiKey=08d1b3a92a4543b398d786fd8bdad5fc`;
    const articles = await fetchArticles(url);
    this.setState({ articles: articles, isLoading: false });
  }

  render() {
    let route = (
      <Switch>
        <Route
          path='/'
          exact
          render={() =>
            <HomePage
              articles={this.state.articles}
              isLoading={this.state.isLoading}
            />}
        />
        <Route
          path='/dashboard'
          exact
          render={() =>
            <DashboardPage />
          }
        />
      </Switch>
    );
    return (
      <div className="conatainer">
        <NavBar
          onSourceChangeHandler={this.onSourceChangeHandler}
          onCategoryChangeHandler={this.onCategoryChangeHandler}
          onCountryChangeHandler={this.onCountryChangeHandler}
          onSearchHandler={this.onSearchHandler}
          inputChangeHandler={this.inputChangeHandler}
        />

        {route}

        {/* {this.state.isLoading ? (
          <center>
            <div className="spinner-grow m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </center>
        ) : (this.state.articles.map((item, index) => (<Article article={item} />)))
        } */}
        {/* <Footer /> */}
      </div>
    );
  }

}

export default withRouter(App);
