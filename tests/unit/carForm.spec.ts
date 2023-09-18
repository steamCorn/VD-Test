import { shallowMount } from '@vue/test-utils';
// import flushPromises from 'flush-promises';
// import waitForExpect from 'wait-for-expect';
import CarForm from '../../src/components/forms/carForm.vue';

const wrapper = shallowMount(CarForm);

describe('CarForm.vue', () => {
  test('updateYear function', () => {
    expect(wrapper.vm.getOnlyYear('20151003')).toBe('2015');
    expect(wrapper.vm.getOnlyYear('03-15-2010')).toBe('03-1');
  });
});

/** Here I wanted to test vee-validate and struggled
 * with triggered event for submit button */
// describe('Testing validation', () => {
//   const carFormWrapper = mount(CarForm);
//   test('Trigger submit form with empty data', async () => {;
//     await carFormWrapper.find('button').trigger('click');
//     await flushPromises();
//     await waitForExpect(() => {
//       expect(carFormWrapper.html()).toContain('Postcode is not valid.');
//     });
//   });
//   // console.log('CarForm', carFormWrapper.html());
// });
