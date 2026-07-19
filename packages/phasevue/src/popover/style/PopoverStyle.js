import { style } from '@phasevueui/styles-core/popover';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
