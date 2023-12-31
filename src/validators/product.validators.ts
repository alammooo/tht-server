import { date, number, object, string } from 'yup';

export const findValidator = object().shape({
  params: object().shape({
    productId: number().required(),
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
    image: string().required(),
    categoryId: number().required(),
  }),
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
