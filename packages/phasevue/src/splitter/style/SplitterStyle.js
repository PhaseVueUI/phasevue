import { style } from '@phasevueui/styles-core/splitter';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.layout],
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
};

export default BaseStyle.extend({
    name: 'splitter',
    style,
    classes
});
