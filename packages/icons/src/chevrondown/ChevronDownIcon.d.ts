import type { DefineComponent } from '@phasevueui/core';
import type { Icon } from '@phasevueui/icons/baseicon';

declare class ChevronDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronDownIcon: DefineComponent<ChevronDownIcon>;
    }
}

export default ChevronDownIcon;
