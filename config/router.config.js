export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/library' },
      {
        path: '/system',
        name: 'system',
        icon: 'setting',
        routes: [
          {
            path: '/system/library',
            name: 'library',
            icon: 'qrcode',
            component: './System/LibrariesManage',
            authority: 'LIBRARY',
          },
          {
            path: '/system/resource',
            name: 'resource',
            icon: 'hdd',
            component: './System/ResourceManage',
            authority: 'RESOURCE',
          },
          {
            path: '/system/organ',
            name: 'organ',
            icon: 'cluster',
            component: './System/OrganManage',
            authority: 'ORGAN',
          },
          {
            path: '/system/user',
            name: 'user',
            icon: 'idcard',
            component: './System/UserManage',
            authority: 'USER',
          },
          {
            path: '/system/permission',
            name: 'permission',
            icon: 'lock',
            component: './System/PermissionManage',
            authority: 'PERMISSION',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/system/permission/rolepermissionrel',
                name: 'rolepermissionrel',
                component: './System/RolePermissionRel',
                authority: 'ROLEPERMISSIONREL',
              },
              {
                path: '/system/permission/userrolerel',
                name: 'userrolerel',
                component: './System/UserRoleRel',
                authority: 'USERROLEREL',
              },
            ],
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        authority: 'EXCEPTION',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'library',
        icon: 'forward',
        path: '/library',
        component: './Library/All',
      },
      // {
      //   name: 'myLibrary',
      //   icon: 'warning',
      //   path: '/myLibrary',
      //   component: './Library/My',
      // },
      {
        name: 'tuijian',
        icon: 'like',
        path: '/tuijian',
        component: './Library/Tuijian',
      },
    ],
  },
];
