import { shallowMount } from '@vue/test-utils';
import DropdownInput from '../../src/components/formElements/DropdownInput.vue';
/** Constants */
import mileageOptions from '../../src/constants/mileageOptions';

describe('DropdownInput.vue', () => {
  const wrapper = shallowMount(DropdownInput, {
    props: {
      fieldName: 'mileage',
      fieldTitle: 'Kilometerstand',
      rules: 'required',
      optionList: mileageOptions.map((option) => option.value),
      selectedOption: '4',
    },
  });
  test('does a DropdownInput exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('length of option list', () => {
    expect(wrapper.find('label').text()).toContain('Kilometerstand');
  });
});
