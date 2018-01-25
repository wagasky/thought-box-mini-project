import React, { Component } from 'react';

export default class CreateThought extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  handleThoughInput = (e) => {
      const { name, value } = e.target

      this.setState({ [name]: value })
  }

  submitIdea = (e) => {
    e.preventDefault()
    this.props.createThought(this.state)
    this.setState({
      title: '',
      body: ''
    })

  } 

  render() {
    return(
      <div>
        <form onSubmit={this.submitIdea}>
          <input type='text'
                 placeholder='title'
                 name='title'
                 value={this.state.title}
                 onChange={this.handleThoughInput}/>
          <input type='text'
                 placeholder='body'
                 name='body'
                 value={this.state.body}
                 onChange={this.handleThoughInput}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }

}
