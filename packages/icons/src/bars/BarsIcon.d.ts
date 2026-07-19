import type { DefineComponent } from '@phasevueui/core';
import type { Icon } from '@phasevueui/icons/baseicon';

declare class BarsIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        BarsIcon: DefineComponent<BarsIcon>;
    }
}

export default BarsIcon;
