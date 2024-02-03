import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PIN_RULE = /^([a-zA-Z0-9]){4}$/g;
const PASSWORD_RULE_MESSAGE =
  'Password should have 1 upper case, lowcase letter along with a number and special character.';
const PIN_RULE_MESSAGE = 'pin should be 4 characters';
const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = {
  PASSWORD_RULE,
  PIN_RULE
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
  PIN_RULE_MESSAGE,
};

export const SETTINGS = {
  VALIDATION_PIPE,
};
