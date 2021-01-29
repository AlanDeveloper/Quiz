import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  text-align: center;
  padding: 15px 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.contrastText};
  border: 0;
  cursor: pointer;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius}

  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;