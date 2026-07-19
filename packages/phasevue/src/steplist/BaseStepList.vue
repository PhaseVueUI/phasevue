<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import StepListStyle from 'phasevue/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
