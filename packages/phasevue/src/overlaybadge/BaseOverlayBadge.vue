<script>
import Badge from 'phasevue/badge';
import OverlayBadgeStyle from 'phasevue/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
