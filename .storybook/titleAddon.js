import addons from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';

addons.register('TitleAddon', api => {
    const custonTitle = 'Custom button';
    let interval = null;
    const setTitle = () => {
        clearTimeout(interval);
        let storyData = null;
        try {
            story = api.getCurrentStoryData();
        } catch(e) {

        }

        let title;
        if(!storyData) {
            title = custonTitle;
        } else {
            title = `${storyData.kind} - ${storyData.name} | ${custonTitle}`;
        }

        if(document.title !== title) {
            document.title = title;
        }

        interval = setTimeout(setTitle, 100);
    };
    setTitle();
    api.on(STORY_RENDERED, story => {
        setTitle();
    })
})