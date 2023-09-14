import { shallowMount, mount } from '@vue/test-utils';
// import flushPromises from 'flush-promises';
import VeeValidate from 'vee-validate';
import CarForm from '../../src/components/forms/carForm.vue';

const wrapper = shallowMount(CarForm);

describe('CarForm.vue', () => {
  test('updateYear function', () => {
    expect(wrapper.vm.getOnlyYear('20151003')).toBe('2015');
    expect(wrapper.vm.getOnlyYear('03-15-2010')).toBe('03-1');
  });
});

test('Test the vee-validate directive', async () => {
  const Vue = createLocalVue();
  // important to turn off the sync behavior.
  const wrapperTest = mount(
    {
      template: `
                <div>
                  <input type="text" name="input" v-validate="'required'">
                  <span id="error">{{ errors.first('input') }}</span>
                </div>
                `,
    },
    { sync: false, localVue: Vue }
  );
  const error = wrapperTest.find('#error');

  expect(error.text()).toBe('');
  wrapperTest.find('input').setValue('');
  expect(error.text()).toBe('The input field is required.');
  // await vm.$validator.validate();

  // expect(vm.$validator.errors.any()).toBe(true);
});