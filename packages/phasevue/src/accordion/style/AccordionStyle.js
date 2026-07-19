import { style } from '@phasevueui/styles-core/accordion';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-accordion p-component'
};

export default BaseStyle.extend({
    name: 'accordion',
    style,
    classes
});
