<script>
import BaseInput from '@phasevueui/core/baseinput';
import TextareaStyle from 'phasevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseInput,
    props: {
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
