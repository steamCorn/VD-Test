import { shallowMount, mount } from '@vue/test-utils';
import BaseInput from '../../src/components/formElements/BaseInput.vue';

const baseInput = shallowMount(BaseInput);

describe('BaseInput component testing', () => {
  test('Function replaceCharacters from string', () => {
    expect(baseInput.vm.replaceCharacters('abc')).toBe('ABC');
    expect(baseInput.vm.replaceCharacters('  aB-cd.E ')).toBe('ABCDE');
    expect(baseInput.vm.replaceCharacters('A B C')).toBe('ABC');
    expect(baseInput.vm.replaceCharacters('!/">.,')).toBe('');
    expect(baseInput.vm.replaceCharacters('')).toBe('');
  });
  test('Show text', () => {
    const input = mount(BaseInput, {
      props: {
        fieldTitle: 'Title test',
        fieldName: 'fieldNameTest',
        type: 'text',
        placeholder: 'Test placeholder',
      },
    });
    expect(input.find('[data-test="input-title"]').text()).toBe('Title test');
  });
});
