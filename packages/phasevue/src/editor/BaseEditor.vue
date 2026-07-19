<script>
import BaseEditableHolder from '@phasevueui/core/baseeditableholder';
import EditorStyle from 'phasevue/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseEditableHolder,
    props: {
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $pcEditor: this,
            $parentInstance: this
        };
    }
};
</script>
