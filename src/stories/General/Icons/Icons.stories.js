import React from 'react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import Button from '../../../components/Button';


export default {
    title: 'Global/Icons/Icons',
    component: Button1,
    decorators: [withKnobs, withInfo]
}

export const Button1 = () => {
    return <Button title={text('Button text', 'text1')} />
}

export const Button2 = () => {
    return <Button title={text('Button text', 'text2')} />
}