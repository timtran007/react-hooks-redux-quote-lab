import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteForm() {
  const dispatch = useDispatch()
  const initialFormData = {
    content: '',
    author: '',
    id: uuid(),
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const key = e.target.id
      const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
  }

  

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submitted form data', formData)
    dispatch(addQuote(formData))
    setFormData(initialFormData)
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      id="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      id="author"
                      value={formData.author} 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
