<script>
import BaseComponent from '@phasevueui/core/basecomponent';
import CardStyle from 'phasevue/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
