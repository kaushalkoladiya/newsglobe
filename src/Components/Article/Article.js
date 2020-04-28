import React from 'react';
import Moment from 'react-moment';

const article = (props) => { 

  return (
    <div className="card border-0 m-3"> 
      <div className="row no-gutters">
        <div className="col-md-4">
          <img 
            src={props.article.urlToImage}
            alt="not found"
            className="w-100 h-auto img img-fluid"
            />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{ props.article.title }</h5>
            <p className="card-text">{ props.article.description }</p>
            
            <p className="card-text small text-muted">
              <span><Moment format="YYYY, MMM DD" date={ props.article.publishedAt }/></span>
              <span>{ " " }By{ " " }
                {
                  (props.article.author) ? 
                  props.article.author :
                  "Unknown"
                }
              </span>
              <span>
                <a className="btn btn-sm btn-link" href={ props.article.url } target="_blank" rel="noopener noreferrer">Read More</a>
              </span>
            </p>
            <p className="card-text text-muted small"><span>From { props.article.source.name }</span></p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default article;