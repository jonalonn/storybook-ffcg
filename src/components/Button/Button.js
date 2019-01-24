import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  border: none;
  padding: 1.25rem 2.25rem;
  font-size: .825rem;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: 2rem;
  user-select: none;
  outline: none;
  backface-visibility: hidden;
  transform: translateZ(0);

  /* DISABLED */
  &:disabled {
    background-color: lightgray;
    color: gray;
    cursor: not-allowed;
  }

  /* ROTATE 360 DEG */
  ${({ hoverEffect }) => hoverEffect === 'rotate-180deg' && `
    transform: rotate(0deg);
    transition: transform .5s cubic-bezier(.175, .885, .32, 1.275);

    &:hover {
      transform: rotate(180deg);
    }
  `}

  /* SCALE UP */
  ${({ hoverEffect }) => hoverEffect === 'scale-up' && `
    transform: scale(1);
    transition: transform .75s cubic-bezier(.75, -0.5, 0, 1.75);

    &:hover {
      transform: scale(1.25);
    }
  `}

  /* SCALE DOWN */
  ${({ hoverEffect }) => hoverEffect === 'scale-down' && `
    transform: scale(1);
    transition: transform .75s cubic-bezier(.75, -0.5, 0, 1.75);

    &:hover {
      transform: scale(.75);
    }
  `}
`;

const Button = ({
  onClick = null,
  text = 'Lorem ipsum',
  hoverEffect,
  disabled = false,
  backgroundColor = 'aqua',
  textColor = 'black'
}) => (
  <Container
    onClick={onClick}
    hoverEffect={hoverEffect}
    disabled={disabled}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    {text}
  </Container>
);

export default Button;
