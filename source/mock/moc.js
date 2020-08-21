import Mock from 'mockjs';
import mockFetch from 'mockjs-fetch';
mockFetch(Mock);

Mock.setup({
  timeout: '200-400', // mockFetch支持 mockjs 已有的 timeout 设置项
  debug: true, // mockFetch新增的设置项，如果开启，请求时会打印一些日志
});

Mock.mock(/testMockFetch\.json/, {
  code: 0,
  data: {
      total: 47,
      'data|10': [
          {
            'id|+1': 1, //数字从当前数开始后续依次加一
            'name': '@name', //随机名字
            'tel': '@string('number', 11)',
            'password': '@string(8)',
              // name: '小茗同学',
              // age: 18,
              // address: '中国北京朝阳区'
          },
      ],
  },
});