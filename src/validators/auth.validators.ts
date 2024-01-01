import * as yup from 'yup';

export const loginValidator = yup.object().shape({
  body: yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  }),
});