import {
  createService,
  deleteService,
  getAllService,
  getOneService,
  updateService,
} from '@/services/product.services';
import { ExpressFc } from '@/types';
import {
  allValidator,
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/product.validators';

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const { query } = await allValidator.validate(req);
    const result = await getAllService(query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req);
    const result = await getOneService({ id: params.productId });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createController: ExpressFc = async (req, res, next) => {
  try {
    const { file, body } = await createValidator.validate(req, { stripUnknown: true });
    await createService({ file, payload: body });
    res.status(200).json({ message: 'success create product' });
  } catch (error) {
    next(error);
  }
};

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    const { body, params } = await updateValidator.validate(req);
    await updateService({ ...body, id: params.productId });
    res.status(200).json({ message: 'success update product' });
  } catch (error) {
    next(error);
  }
};

export const deleteController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteValidator.validate(req);
    await deleteService({ id: params.productId });
    res.status(204).json({ message: 'success delete product' });
  } catch (error) {
    next(error);
  }
};
