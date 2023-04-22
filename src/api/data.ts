// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
// import axios from 'axios';
enum URL {
  state = '/user/state',
  faultState = '/user/faultState',
  lineData = '/user/lineData',

}
interface LoginRes {
  token: string;
}
interface IState {
  name: string;
  count:number
}
export interface LoginData {
  username: string;
  password: string;
}

export const getState = async () => get<[]>({ url: URL.state });
export const getfaultState = async () => get<[]>({ url: URL.faultState });
export const getlineData = async () => get<[]>({ url: URL.lineData });

