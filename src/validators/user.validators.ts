import { date, number, object, string } from 'yup';

export const findValidator = object().shape({
  params: object().shape({
    userId: number(),
    email: number(),
  }),
});

export const deleteValidator = object().shape({
  params: object().shape({
    userId: number().required(),
  }),
});

export const createValidator = object().shape({
  body: object().shape({
    email: string().email().required(),
    profilePicture: string().nullable(),
    position: string().required(),
    fullName: string().required(),
    password: string().required(),
  }),
});

export const updateValidator = object().shape({
  body: object().shape({
    email: string().email().required(),
    profilePicture: string(),
    position: string().required(),
    fullName: string().required(),
    passwrod: string().required(),
  }),
  params: object().shape({
    userId: number().required(),
  }),
});
