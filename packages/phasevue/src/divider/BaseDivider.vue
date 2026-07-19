<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import DividerStyle from 'phasevue/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $pcDivider: this,
            $parentInstance: this
        };
    }
};
</script>
