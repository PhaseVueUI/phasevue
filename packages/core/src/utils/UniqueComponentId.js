import { uuid } from '@phasevueui/utils/uuid';

/**
 * @deprecated since v4.3.0. Use `uuid` from @phasevueui/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
