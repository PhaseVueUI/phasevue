<script>
import BaseEditableHolder from '@phasevueui/core/baseeditableholder';
import SelectButtonStyle from 'phasevue/selectbutton/style';

export default {
    name: 'BaseSelectButton',
    extends: BaseEditableHolder,
    props: {
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        multiple: Boolean,
        allowEmpty: {
            type: Boolean,
            default: true
        },
        dataKey: null,
        ariaLabelledby: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: SelectButtonStyle,
    provide() {
        return {
            $pcSelectButton: this,
            $parentInstance: this
        };
    }
};
</script>
