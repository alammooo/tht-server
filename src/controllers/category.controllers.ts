import {
  createService,
  deleteService,
  getAllService,
  getOneService,
  updateService,
} from '@/services/category.services';
import { ExpressFc } from '@/types';
import {
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/category.validators';

export const getAllController: ExpressFc = async (req, res, next) => {
  try {
    const result = await getAllService();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await findValidator.validate(req);
    const result = await getOneService({ id: params.categoryId });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createValidator.validate(req);
    await createService(body);
    res.status(200).json({ message: 'success update category' });
  } catch (error) {
    next(error);
  }
};

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    const { body, params } = await updateValidator.validate(req);
    await updateService({ ...body, id: params.categoryId });
    res.status(200).json({ message: 'success update category' });
  } catch (error) {
    next(error);
  }
};

export const deleteController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteValidator.validate(req);
    await deleteService({ id: params.categoryId });
    res.status(204).json({ message: 'success delete category' });
  } catch (error) {
    next(error);
  }
};
