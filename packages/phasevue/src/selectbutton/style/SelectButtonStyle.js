import { style } from '@phasevueui/styles-core/selectbutton';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props, instance }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': instance.$invalid, // @todo: check
            'p-selectbutton-fluid': props.fluid
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    style,
    classes
});
