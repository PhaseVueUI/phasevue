import { style } from '@phasevueui/styles-core/progressspinner';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-progressspinner',
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

export default BaseStyle.extend({
    name: 'progressspinner',
    style,
    classes
});
