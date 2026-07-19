<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import ButtonGroupStyle from 'phasevue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
