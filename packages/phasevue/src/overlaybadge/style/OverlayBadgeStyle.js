import { style } from '@phasevueui/styles-core/overlaybadge';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-overlaybadge'
};

export default BaseStyle.extend({
    name: 'overlaybadge',
    style,
    classes
});
