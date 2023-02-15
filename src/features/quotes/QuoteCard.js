import React from "react";
import { useSelector } from "react-redux";

function QuoteCard(props) {
  const quotes = useSelector( state => state.quotes)
  console.log('current state in QuoteCard', quotes)

  quotes.map(quote =>{
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary">
              Upvote
            </button>
            <button type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/}</div>
        </div>
      </div>
    </div>
  );})
  
}

export default QuoteCard;
