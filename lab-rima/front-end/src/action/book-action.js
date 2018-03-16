import uuid from 'uuid/v4';
import {logError} from '../lib/utils';
import superagent from 'superagent';

export const booksGet = books => ({
  type: 'BOOKS_GET',
  payload: books,
});

export const bookCreate = book => ({
    type: 'BOOK_CREATE',
    payload: book,
});

export const bookUpdate = book => ({
  type: 'BOOK_UPDATE',
  payload: book,
});

export const bookDelete = book => ({
  type: 'BOOK_DELETE',
  payload: book,
});

export const bookFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/book`)
    .then(res => dispatch(booksGet(res.body)))
    .catch(logError);
};

export const bookCreateRequest = book => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/v1/book`)
    .send(book)
    .then(res => dispatch(bookCreate(res.body)))
    .catch(logError);
};

export const bookUpdateRequest = book => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/v1/book/{$book._id}`)
    .send(book)
    .then(() => dispatch(bookUpdate(book)))
    .catch(logError);
};

export const bookDeleteRequest = book => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/v1/book/${book._id}`)
    .then(() => dispatch(bookDelete(book)))
    .catch(logError);
};
