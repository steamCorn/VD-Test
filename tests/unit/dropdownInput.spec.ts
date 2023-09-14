import { shallowMount, mount } from '@vue/test-utils';
import DropdownInput from '../../src/components/formElements/DropdownInput.vue';
/** Constants */
import mileageOptions from '../../src/constants/mileageOptions';

const dropdownInput = shallowMount(DropdownInput);
// const validationField = mount(Field);

describe('DropdownInput.vue', () => {
  // console.log('dropdownInput.vm', dropdownInput.vm);

  it('does a DropdownInput exist', () => {
    expect(dropdownInput.exists()).toBe(true);
  });

  // const options = dropdownInput

  // console.log(dropdownInput.find('[data-test="dropdown-option"]'));
  // console.log(dropdownInput.find(validationField))

  // test('get component', () => {
  //   const wrapper = mount(DropdownInput);
  //   const child = wrapper.getComponent(Field);

  //   console.log('child', child)
  //   // console.log('child', child.find('[data-test="dropdown-option"]'))

  //   expect(child.find('[data-test="dropdown-option"]').exists()).toBe(true);
  // })

  // test('Milage options', () => {
  //   const dropdownMenu = mount(DropdownInput, {
  //     props: {
  //       fieldTitle: 'Test title',
  //       optionList: mileageOptions.map((option) => option.value),
  //       selectedOption: '4',
  //     },
  //   });
    // console.log(dropdownMenu.find('[data-test="dropdown-option"]'));
  //   expect(dropdownMenu.find('[data-test="dropdown-option"]')).toBe(true);
  // });
});
