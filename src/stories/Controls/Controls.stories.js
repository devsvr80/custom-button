import React from 'react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs/react.js';

import Button from '../../components/Button';



export default {
    title: 'Controls/Button',
    component: Button,
    decorators: [withKnobs, withInfo]
}

export const Button1 = () => {
    return <Button title={text('Button text', 'text1')} />
}

export const Button2 = () => {
    return <Button title={text('Button text', 'text2')} />
}