import axios from 'axios';
import { API_ROOT, VERSION } from 'src/common/constants';
import { IColumnPayload, IUploadColumnPayload } from 'src/common/initialData';

export const fetchBoard = async (boardId: string) => {
  const response = await axios.get(`${API_ROOT}/${VERSION}/boards/${boardId}`);

  return response.data;
};

export const createColumn = async (payload: IColumnPayload) => {
  const response = await axios.post(`${API_ROOT}/${VERSION}/columns`, payload);

  return response.data;
};

export const updateColumn = async (columnId: string, payload: IUploadColumnPayload) => {
  const response = await axios.put(`${API_ROOT}/${VERSION}/columns/${columnId}`, payload);

  return response.data;
};
