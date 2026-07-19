import ConfirmationEventBus from 'phasevue/confirmationeventbus';
import { PhaseVueConfirmSymbol } from 'phasevue/useconfirm';

export default {
    install: (app) => {
        const ConfirmationService = {
            require: (options) => {
                ConfirmationEventBus.emit('confirm', options);
            },
            close: () => {
                ConfirmationEventBus.emit('close');
            }
        };

        app.config.globalProperties.$confirm = ConfirmationService;
        app.provide(PhaseVueConfirmSymbol, ConfirmationService);
    }
};
