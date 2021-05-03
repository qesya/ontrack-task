import axios from 'axios';
import {BASE_URL, GET_BOOKS, GET_DETAIL_BOOKS} from '../constants/api';

export const filterBooks = async filter => {
  const res = await axios.post(BASE_URL + GET_BOOKS, {
    page: 1,
    itemsPerPage: 20,
    filters: [
      {
        type: 'all',
        values: [filter],
      },
    ],
  });

  return res.data;
};

export const getBooks = async page => {
  const res = await axios.post(BASE_URL + GET_BOOKS, {
    page: page,
    itemsPerPage: 20,
  });
  return res.data;
};

export const getDetailBook = async id => {
  const res = await axios.get(BASE_URL + GET_DETAIL_BOOKS(id));

  return res.data;
};
