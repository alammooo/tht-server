import { hashSync } from 'bcrypt';

import {
  createService,
  deleteService,
  getAllService,
  getOneService,
  updateService,
} from '@/services/user.services';
import { ExpressFc } from '@/types';
import {
  createValidator,
  deleteValidator,
  findValidator,
  updateValidator,
} from '@/validators/user.validators';

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
    const result = await getOneService({ id: params.userId });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createController: ExpressFc = async (req, res, next) => {
  try {
    const { body } = await createValidator.validate(req);
    await createService({ ...body, password: hashSync(body.password, 10) });
    res.status(201).json({ message: 'success create user' });
  } catch (error) {
    next(error);
  }
};

export const updateController: ExpressFc = async (req, res, next) => {
  try {
    const { body, params } = await updateValidator.validate(req);
    await updateService({
      id: params.userId,
      fullName: body.fullName,
    });
    res.status(200).json({ message: 'success update user' });
  } catch (error) {
    next(error);
  }
};

export const deleteController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteValidator.validate(req);
    await deleteService({ id: params.userId });
    res.status(204).json({ message: 'success delete user' });
  } catch (error) {
    next(error);
  }
};