import type { DefineComponent } from '@phasevueui/core';
import type { Icon } from '@phasevueui/icons/baseicon';

declare class AngleDoubleDownIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        AngleDoubleDownIcon: DefineComponent<AngleDoubleDownIcon>;
    }
}

export default AngleDoubleDownIcon;
