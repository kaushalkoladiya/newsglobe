import React from 'react';

import Article from '../Components/Article/Article';

export default ({ isLoading, articles }) => {
  return (
    <>
      {
        isLoading ? (
          <center>
            <div className="spinner-grow m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </center>
        ) : (articles.map((item, key) => (<Article key={key} article={item} />)))
      }
    </>
  );
}