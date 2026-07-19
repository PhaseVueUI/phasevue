<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import FluidStyle from 'phasevue/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>
