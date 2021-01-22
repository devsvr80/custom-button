import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import mainTheme from './mainTheme';
import pinkTheme from './pinkTheme';


import './titleAddon';

addons.setConfig({
    theme: themes.dark //pinkTheme //mainTheme
});
