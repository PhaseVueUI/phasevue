/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.phasevue.org/progressbar)
 *
 * @module progressbarstyle
 *
 */
import type { BaseStyle } from '@phasevueui/core/base/style';

export enum ProgressBarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-progressbar',
    /**
     * Class name of the value element
     */
    value = 'p-progressbar-value',
    /**
     * Class name of the label element
     */
    label = 'p-progressbar-label'
}

export interface ProgressBarStyle extends BaseStyle {}
