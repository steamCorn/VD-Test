import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import SearchInput from '../../src/components/formElements/SearchInput.vue';

describe('render the App', () => {
  it('get search component', () => {
    const searchComponent = shallowMount(App, {
      slots: {
        // default: SearchInput,
        default: '<div v-if="carData.merk && !thereAnyCar" class="information-cart"></div>',
      },
    });

    expect(searchComponent.exists()).toBe(true);
  });
});
