<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import IftaLabelStyle from 'phasevue/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>
