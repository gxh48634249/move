import request from '@/utils/request';
import server from '../../config/service.config';

export async function query() {
  return request('/api/users');
}

export async function queryMy() {
  const service = server.libraryServer;
  const resource = '/search';
  const uri = service+resource;
  return request(uri, {
    method: 'GET',
    mode: 'cors',
    param: {content:'123'}
  });
}
