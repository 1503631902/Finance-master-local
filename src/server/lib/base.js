
const dev_url = '';
const prod_url = '';
const env = 'dev';
// const env = 'prod'
const BASEURL = env === 'dev' ? dev_url : prod_url;

// 用户相关
export const user_url = {
    login: `${BASEURL}/login`,
    register: `${BASEURL}/register`,
    userIndo: `${BASEURL}/info`,
};

// 审批相关
export const Approve = {};
