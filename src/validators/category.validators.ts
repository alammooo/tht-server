import { date, number, object, string } from 'yup';

export const findValidator = object().shape({
  params: object().shape({
    categoryId: number().required(),
  }),
});

export const deleteValidator = object().shape({
  params: object().shape({
    categoryId: number().required(),
  }),
});

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
});

export const updateValidator = object().shape({
  body: object().shape({
    name: string().required(),
  }),
  params: object().shape({
    categoryId: number().required(),
  }),
});
