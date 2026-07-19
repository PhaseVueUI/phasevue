<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import InputGroupStyle from 'phasevue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
