import request from '@/utils/request';
import server from '../../config/service.config';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  const service = server.server;
  const resource = '/user/currentUser';
  const uri = service+resource;
  return request(uri, {
    method: 'POST',
    mode: 'cors',
  });
}
