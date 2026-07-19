import { style } from '@phasevueui/styles-core/tabs';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabs p-component',
        {
            'p-tabs-scrollable': props.scrollable
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabs',
    style,
    classes
});
