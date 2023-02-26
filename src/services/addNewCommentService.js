import http from './httpServices';

export function addNewPost(data) {
  return http.post('/comments', data);
}
