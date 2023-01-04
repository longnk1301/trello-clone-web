import axios from 'axios';
import { API_ROOT, VERSION } from 'src/common/constants';

export const fetchBoard = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/${VERSION}/boards/${boardId}`);

  return response.data;
};
