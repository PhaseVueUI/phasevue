<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import InplaceStyle from 'phasevue/inplace/style';

export default {
    name: 'BaseInplace',
    extends: BaseComponent,
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        displayProps: {
            type: null,
            default: null
        }
    },
    style: InplaceStyle,
    provide() {
        return {
            $pcInplace: this,
            $parentInstance: this
        };
    }
};
</script>
