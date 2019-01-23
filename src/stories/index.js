import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button';

storiesOf('Button/Simple', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('without props', () => <Button />)
  .add('with props', () => <Button onClick={action('clicked')} btnText="This is a button"/>)
  .add('disabled button', () => <Button disabled={true} />);

