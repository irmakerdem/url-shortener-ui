import React, { Component } from 'react';
import { postUrls } from '../../apiCalls';


// https://www.pexels.com/photo/brown-cat-with-green-eyes-617278/



class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    // console.log("14", e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  }

  //API (object)
  // "id": 1,
  // "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  // "short_url": "http://localhost:3001/useshorturl/1",
  // "title": "Awesome photo"

  handleSubmit = e => {
    e.preventDefault();
    postUrls({
      title: this.state.title, 
      long_url: this.state.urlToShorten
    })
    .then(data => {
      this.props.addUrl(data)
    })
    this.clearInputs();
    console.log("handle submit ran!!")
  }

  clearInputs = () => {
    this.setState({
      title: '', 
      urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
