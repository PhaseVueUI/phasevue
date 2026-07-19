import { style } from '@phasevueui/styles-core/inputotp';
import BaseStyle from '@phasevueui/core/base/style';

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    style,
    classes
});
