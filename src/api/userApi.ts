import http from '@/utils/request';

// 获取用户信息
interface userInfoParams{
  name: string;
}
export const postUserInfo = async (data: userInfoParams): Promise<{data: []}> => {
  const res = await http.post('/user/getuserinfo', data);
  return res.data;
}