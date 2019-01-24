import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button';

const Decorator = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

// Hover effects
storiesOf('Button/Hover effects', module)
  .addDecorator(story => (
    <Decorator>
      {story()}
    </Decorator>
  ))
  .add('rotate 180deg', () => (
    <Button
      onClick={action('clicked')}
      hoverEffect="rotate-180deg"
      text="Rotate 180deg"
    />
  ))
  .add('scale up', () => (
    <Button
      hoverEffect="scale-up"
      text="Scale up"
    />
  ))
  .add('scale down', () => (
    <Button
      hoverEffect="scale-down"
      text="Scale down"
    />
  ));

// States
storiesOf('Button/States', module)
  .addDecorator(story => (
    <Decorator>
      {story()}
    </Decorator>
  ))
  .add('disabled', () => (
    <Button
      text="This is disabled"
      disabled={true}
    />
  ));
