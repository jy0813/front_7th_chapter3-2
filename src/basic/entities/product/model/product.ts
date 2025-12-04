import { PRODUCT_ID_PREFIX } from '../config';
import { Product } from './types';

export const createProduct = (data: Omit<Product, 'id'>): Product => {
  return {
    ...data,
    // 설정값(Config)을 가져와서 로직(Logic)을 수행함
    id: `${PRODUCT_ID_PREFIX}${Date.now()}`,
  };
};
