import * as yup from 'yup';

export const loginValidator = yup.object().shape({
  body: yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  }),
});