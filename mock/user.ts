import { MockMethod } from 'vite-plugin-mock';
import { successResult, errorResult, requestParams, getRequestToken } from '/@/utils/result';
import { TokenPrefix } from '/@/utils/auth';

export function createFakeUserList() {
  return [
    {
      user_id: '3306',
      user_name: 'blindmonk',
      real_name: '扫地盲僧',
      avatar: 'https://api.multiavatar.com/blindmonk.svg',
      desc: '达摩深寺扫地僧，盲崖盘坐思人生',
      password: 'blindmonk',
      token: 'P1DeqWBao0HTU47Q',
      organization: '某大型公司CTO',
      location: '中国',
      email: '896226896@qq.com',
      auths: [],
      is_admin: 1,
      dev_languages: 'JavaScript/Vue/React/Node/PHP',
      blog_github: 'https://github.com/MaleWeb',
      blog_juejin: 'https://juejin.cn/user/3016715636842622',
      blog_zhihu: 'https://www.zhihu.com/people/blind_monk',
      role: 'admin',
    },
    {
      user_id: '80',
      user_name: 'test',
      real_name: '盲僧水友',
      avatar: 'https://api.multiavatar.com/test.svg',
      desc: '欢迎加入扫地盲僧水友群',
      password: 'test',
      token: 'yg8bE8nZwiCL4nQg',
      organization: '某大型公司CTO',
      location: '中国',
      email: '8888@china.com',
      auths: [],
      is_admin: 0,
      dev_languages: 'JavaScript/Vue/React/Node/PHP',
      blog_github: 'https://github.com/MaleWeb',
      blog_juejin: 'https://juejin.cn/user/3016715636842622',
      blog_zhihu: 'https://www.zhihu.com/people/blind_monk',
      role: 'user',
    },
  ];
}
export default [
  {
    url: '/user/profile',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return errorResult('Invalid token');
      const checkUser = createFakeUserList().find((item) => `${TokenPrefix}${item.token}` === token);
      if (!checkUser) {
        return errorResult('未获得相应的用户信息');
      }
      return successResult(checkUser);
    },
  },
  {
    url: '/user/login',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request?.body;
      const checkUser = createFakeUserList().find((item) => item.user_name === username && item.password === password);
      if (!checkUser) {
        return errorResult('不存在该用户');
      }
      return successResult({ token: checkUser.token });
    },
  },
  {
    url: '/user/logout',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      console.dir(request);
      const token = getRequestToken(request);
      if (!token) return errorResult('token缺失!');
      const checkUser = createFakeUserList().find((item) => `${TokenPrefix}${item.token}` === token);
      if (!checkUser) {
        return errorResult('token缺失!');
      }
      return successResult('Token 已失效');
    },
  },
  {
    url: '/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
  {
    url: '/user/state',
    timeout: 200,
    method: 'get',
    response: () => {
      const states = [[{
        name: '接入设备',
        count: 14,
        color: 'state-all'
      }, {
        name: '正常运行',
        count: 3,
        color: 'state-normal'
      }, {
        name: '运行预警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '故障报警',
        count: 3,
        color: 'state-fault'
      }, {
        name: '作业待时',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '接入设备',
        count: 14,
        color: 'state-all'
      }, {
        name: '正常运行',
        count: 3,
        color: 'state-normal'
      }, {
        name: '运行预警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '故障报警',
        count: 3,
        color: 'state-fault'
      }, {
        name: '作业待时',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '接入设备',
        count: 14,
        color: 'state-all'
      }, {
        name: '正常运行',
        count: 3,
        color: 'state-normal'
      }, {
        name: '运行预警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '故障报警',
        count: 3,
        color: 'state-fault'
      }, {
        name: '作业待时',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '接入设备',
        count: 14,
        color: 'state-all'
      }, {
        name: '正常运行',
        count: 3,
        color: 'state-normal'
      }, {
        name: '运行预警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '故障报警',
        count: 3,
        color: 'state-fault'
      }, {
        name: '作业待时',
        count: 3,
        color: 'state-stop'
      }]];
      return successResult(states);
    },
  },
  {
    url: '/user/faultState',
    timeout: 200,
    method: 'get',
    response: () => {
      const states = [[{
        name: '异常设备总数',
        count: 14,
        color: 'state-all'
      }, {
        name: '电气报警',
        count: 3,
        color: 'state-normal'
      }, {
        name: '机械报警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '电气故障',
        count: 3,
        color: 'state-fault'
      }, {
        name: '机械故障',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '异常设备总数',
        count: 14,
        color: 'state-all'
      }, {
        name: '电气报警',
        count: 3,
        color: 'state-normal'
      }, {
        name: '机械报警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '电气故障',
        count: 3,
        color: 'state-fault'
      }, {
        name: '机械故障',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '异常设备总数',
        count: 14,
        color: 'state-all'
      }, {
        name: '正常运行',
        count: 3,
        color: 'state-normal'
      }, {
        name: '机械报警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '电气故障',
        count: 3,
        color: 'state-fault'
      }, {
        name: '机械故障',
        count: 3,
        color: 'state-stop'
      }], [{
        name: '异常设备总数',
        count: 14,
        color: 'state-all'
      }, {
        name: '电气报警',
        count: 3,
        color: 'state-normal'
      }, {
        name: '机械报警',
        count: 3,
        color: 'state-alarm'
      }, {
        name: '电气故障',
        count: 3,
        color: 'state-fault'
      }, {
        name: '机械故障',
        count: 3,
        color: 'state-stop'
      }]];
      return successResult(states);
    },
  },
  {
    url: '/user/lineData',
    timeout: 200,
    method: 'get',
    response: () => {
      const states = {
        time:['12','1','2','3','4','5','6','7','8','9','10','11','12'],
        pidai:[2.10,2.20,2.20,2.20,1.45],
        duiqu:[2.10,2.20,1.55,2.20,2.20],
        zhuangchuan:[2.10,1.80,2.20,2.20,1.92],
        xiechuan:[2.10,2.20,1.45,1.73,1.68],
      };
      return successResult(states);
    },
  },
] as MockMethod[];
