import { style } from '@phasevueui/styles-core/scrolltop';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props }) => ['p-scrolltop', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    style,
    classes
});
