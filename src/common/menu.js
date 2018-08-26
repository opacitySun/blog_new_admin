import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '首页',
    key: 'index',
    path: '',
    authority: 'admin', //admin guest
  },
  {
    name: '成本监管',
    key: 'cost',
    path: 'cost',
    authority: 'admin', //admin guest
    children: [
      {
        name: '会计报表',
        path: 'accounting',
      },
      {
        name: '成本报表',
        path: 'cost',
      },
      {
        name: '标杆值管理',
        path: 'standardMgr',
      },
      {
        name: '指标预警',
        path: 'indicatorWarning',
      },
      {
        name: '医院经济运行分析',
        path: 'economicAnalysis/balanceOfPaymentsRatio',
      },
      {
        name: '科室经营分析',
        path: '',
      },
      {
        name: '项目成本分析',
        path: '',
      },
      {
        name: '病种成本分析',
        path: '',
      },
      {
        name: '自动报告',
        path: '',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
