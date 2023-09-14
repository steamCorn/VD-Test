import { defineRule, extend } from 'vee-validate';
import { required, length, numeric } from '@vee-validate/rules';
/** External library */
import moment from 'moment';

defineRule('required', required);
defineRule('length', length);
defineRule('numeric', numeric);

defineRule('license', (value: string, [limit]:[number], field) => {
  const licensePatternOne = /^[A-Z]{1}\d{3}[A-Z]{2}$/;
  const licensePatternTwo = /^[A-Z]{2}\d{3}[A-Z]{1}$/;
  if (value.length < limit || value.length > limit) {
    return `Dit veld moet uit ${limit} tekens bestaan.`;
  }
  if (!licensePatternOne.test(value) && !licensePatternTwo.test(value)) {
    return `${field.label} is niet geldig.`;
  }
  return true;
});

defineRule('zipCode', (value: string) => {
  const postcodePattern = /^\d{4}[A-Za-z]{2}$/;
  if (!value || !value.length) {
    return 'Dit veld is verplicht.';
  }
  if (value.length < 6) {
    return 'Dit veld lengte incorrect (6 tekens: 1234AA).';
  }
  if (!postcodePattern.test(value)) {
    return 'Dit veld moet een geldige postcode zijn (1234AA).';
  }
  return true;
});

defineRule('numberAddition', (value: string) => {
  const alpha = /[A-Za-z]/g;
  const number = /[0-9]/g;
  if (number.test(value) && alpha.test(value)) {
    return 'Dit veld mag alleen een cijfer of letter bevatten.';
  }
  return true;
});

defineRule('birthDate', (value: string) => {
  const todayDate = moment(new Date());
  const minDate = moment().subtract(100, 'years');
  const formateValue = new Date(value);
  if (moment(formateValue).isBefore(minDate)) {
    return 'Uw geboortedatum mag niet ouder zijn dan 100 jaaren.';
  }
  if (moment(formateValue).isAfter(todayDate)) {
    return 'Uw geboortedatum is niet geldig.';
  }
  return true;
});

// Setting Dutch error massage
extend('required', {
  ...required,
  message: 'LOCALIZATION_PATH',
});
