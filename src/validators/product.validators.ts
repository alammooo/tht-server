import { array, date, mixed, number, object, string } from 'yup';

export const findValidator = object().shape({
  params: object().shape({
    productId: number().required(),
  }),
});

export const allValidator = object().shape({
  query: object().shape({
    name: string().optional(),
    categoryId: number().optional(),
    offset: number().optional(),
  }),
});

export const deleteValidator = object().shape({
  params: object().shape({
    productId: number().required(),
  }),
});

export const createValidator = object().shape({
  body: object().shape({
    name: string().required(),
    buyPrice: number().required(),
    sellPrice: number().required(),
    stock: number().required(),
    categoryId: number().required(),
  }),
  file: mixed<Express.Multer.File>().required(),
});

export const updateValidator = object().shape({
  body: object().shape({
    name: string().required(),
    buyPrice: number().required(),
    sellPrice: number().required(),
    stock: number().required(),
    image: string().required(),
    categoryId: number().required(),
  }),
  params: object().shape({
    productId: number().required(),
  }),
});
