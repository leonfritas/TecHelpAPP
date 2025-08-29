import api from './api';

export type CategoryType = {
  idCategory: number;
  nameCategory: string;
};

export const getCategories = async () => {
  const response = await api.get<CategoryType[]>('/category');
  return response.data;
};
