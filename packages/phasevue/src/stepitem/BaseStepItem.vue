<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import StepItemStyle from 'phasevue/stepitem/style';

export default {
    name: 'BaseStepItem',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    }
};
</script>
