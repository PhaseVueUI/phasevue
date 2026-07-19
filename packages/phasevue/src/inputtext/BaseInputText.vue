<script>
import BaseInput from '@phasevueui/core/baseinput';
import InputTextStyle from 'phasevue/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>
