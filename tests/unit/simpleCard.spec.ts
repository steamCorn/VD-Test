import { mount } from '@vue/test-utils';
import SimpleCard from '../../src/components/forms/simpleCard.vue';

describe('SimpleCard.vue', () => {
  test('Generate content for slot', () => {
    const wrapper = mount(SimpleCard, {
      slots: {
        content: { template: '<div>Sidebar</div>' },
      },
    });
    expect(wrapper.html()).toContain('<div>Sidebar</div>');
  });
});
