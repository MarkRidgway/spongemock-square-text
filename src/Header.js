import React from 'react';
import styled from 'styled-components';
import headerImage from './assets/spongemock.jpg';

const Wrapper = styled.header`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-size: 20px;
  text-align: center;

  img {
    max-width: 100%;
    width: 100%;
  }
`;

export default () => {
  return (
    <Wrapper>
      <img src={headerImage} alt='Logo' />
    </Wrapper>
  );
};

