import { $dt } from '@primeuix/styled';
import * as utils from '@phasevueui/utils';

export function blockBodyScroll() {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll() {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
