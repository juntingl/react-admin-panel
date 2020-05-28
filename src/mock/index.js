const menuList = [
  {
    title: '首页',
    path: '/admin/home'
  },
  {
    title: 'UI',
    path: 'admin/ui',
    children: [
      {
        title: 'Button',
        path: '/admin/ui/button'
      },
      {
        title: 'Icon',
        path: '/admin/ui/icon'
      },
      {
        title: 'Form',
        path: '/admin/ui/form',
        children: [
          {
            title: 'Button',
            path: '/admin/ui/button1'
          },
        ]
      }
    ]
  }
];

export {
  menuList
}
