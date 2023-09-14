import { mount } from '@vue/test-utils';
import SimpleCard from '../../src/components/forms/simpleCard.vue';

describe('CarForm.vue', () => {
  test('updateYear function', () => {
    const wrapper = mount(SimpleCard, {
      slots: {
        content: { template: '<div>Sidebar</div>' },
      },
    });
    expect(wrapper.html()).toContain('<div>Sidebar</div>');
  });
});
