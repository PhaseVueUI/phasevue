import { style } from '@phasevueui/styles-core/ripple';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    style,
    classes
});
