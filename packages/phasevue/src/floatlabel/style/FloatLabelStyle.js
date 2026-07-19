import { style } from '@phasevueui/styles-core/floatlabel';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-floatlabel',
        {
            'p-floatlabel-over': props.variant === 'over',
            'p-floatlabel-on': props.variant === 'on',
            'p-floatlabel-in': props.variant === 'in'
        }
    ]
};

export default BaseStyle.extend({
    name: 'floatlabel',
    style,
    classes
});
