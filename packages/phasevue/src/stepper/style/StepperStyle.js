import { style } from '@phasevueui/styles-core/stepper';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-readonly': props.linear
        }
    ],
    separator: 'p-stepper-separator'
};

export default BaseStyle.extend({
    name: 'stepper',
    style,
    classes
});
