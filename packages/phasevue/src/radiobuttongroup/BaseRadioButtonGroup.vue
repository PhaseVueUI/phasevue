<script>
import BaseEditableHolder from '@phasevueui/core/baseeditableholder';
import RadioButtonGroupStyle from 'phasevue/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
