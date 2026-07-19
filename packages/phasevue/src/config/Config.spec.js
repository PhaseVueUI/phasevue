import { defaultOptions } from '@phasevueui/core/config';
import { config } from '@vue/test-utils';

config.global.mocks['$phasevue'] = {
    config: defaultOptions
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('PhaseVue.vue', () => {
    it('should exist', async () => {});
});
