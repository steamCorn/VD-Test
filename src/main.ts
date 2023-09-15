import { createApp } from 'vue';
import { configure } from 'vee-validate';
import './plugin/validationCustomRules';
import validationMessages from './plugin/validationMessages';
import App from './App.vue';

const app = createApp(App);

configure({
  generateMessage: ({ field, rule }) => {
    const message = `The ${field} field is invalid.`;
    if (rule?.name === 'required') {
      return validationMessages.messages.required;
    }
    return message;
  },
});

app.mount('#app');
