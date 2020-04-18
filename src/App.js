import React from 'react';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Article from './Components/Article';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    let link = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=08d1b3a92a4543b398d786fd8bdad5fc';
    link = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=08d1b3a92a4543b398d786fd8bdad5fc';
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          articles: data.articles
        })
      })
  }

  render() {
    return (
      <div className="conatainer">
        <NavBar />
        {
          this.state.articles.map((item, index) => {
            return (
              <Article article={item} />
            )
          })
        }
        <Footer />
      </div>
    );
  }

}

export default App;
