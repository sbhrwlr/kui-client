import PasswordValidator from 'password-validator';

const schema = new PasswordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(['Passw0rd', 'Password123']);

export const validateEmailPassword = (email: string, password: string) => {
  // eslint-disable-next-line no-useless-escape
  const regexp =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexp.test(email) && schema.validate(password);
};
