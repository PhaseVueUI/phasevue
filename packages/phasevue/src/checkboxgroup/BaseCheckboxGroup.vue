<script>
import BaseEditableHolder from '@phasevueui/core/baseeditableholder';
import CheckboxGroupStyle from 'phasevue/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
