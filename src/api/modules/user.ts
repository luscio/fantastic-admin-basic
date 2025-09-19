import api from '../index'

export default {
  // 登录
  login: (data: {
    account: string
    password: string
    captcha: string
    remember: boolean
    sys_captcha: string
  }) => api.post('/admin-api/login', {
    ...data,
    username: data.account,
  }),

  // 获取权限
  permission: () => api.get('user/permission', {
    baseURL: '/mock/',
  }),

  // 修改密码
  passwordEdit: (data: {
    password: string
    newPassword: string
  }) => api.post('user/password/edit', data, {
    baseURL: '/mock/',
  }),

  // 获取验证码
  captcha: () => api.get('/admin-api/captcha'),
}
