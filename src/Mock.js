import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-size: 20px;

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 8px;
    font-size: 22px;
  }
`;

class Mock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      mock: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const text = event.target.value;
    const mock = this.mockString(text);

    this.setState({ text, mock });
  }

  mockString(string) {
    return string.split('').map( (char, index) => {
      if(index % 2) {
        return char.toLowerCase();
      }
      else {
        return char.toUpperCase();
      }
    }).join('');
  }

  render() {
    return (
      <Wrapper>
        <textarea onChange={ this.handleChange } value={ this.state.text }></textarea>
        <p>{ this.state.mock }</p>
      </Wrapper>
    );
  }

}

export default Mock;