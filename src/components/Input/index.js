import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px 20px;
    outline: 0;
    border: 3px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export default function Input({ onChange, placeholder }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder}/>
    </div>
  );
}

Input.defaultProps = {
  value: '',
}


Input.protoTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}