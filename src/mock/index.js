import Mock from 'mockjs'

// 热度
Mock.mock('http://localhost/api/Hot', 'get', {
  code: 200,
  'data|6-20': [
    {
      // id
      'id|+1': 1,
      // 随机返回中文文字-显示标题
      title: '@ctitle(4, 16)',
      // 热度
      heat: '@natural(150, 2000)',
      // link
      link: '@url(http)',
      // 随机返回内容
      content: '@ctitle(40, 300)',
      // 随机有无图片
      picture: 'https://fakeimg.pl/190x150/619ac3/'
    }
  ]
})
