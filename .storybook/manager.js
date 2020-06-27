import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import mainTheme from './mainTheme';
import './titleAddon';

addons.setConfig({
    theme: mainTheme
});
