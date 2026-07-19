import type { DefineComponent } from '@phasevueui/core';
import type { Icon } from '@phasevueui/icons/baseicon';

declare class ArrowDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowDownIcon: DefineComponent<ArrowDownIcon>;
    }
}

export default ArrowDownIcon;
