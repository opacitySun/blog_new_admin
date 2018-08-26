import mockjs from 'mockjs';

export default {
  getDiseaseHospitalComparison: mockjs.mock({
    'data|100': [
      {
        'key|+1': 1,
        'no|+1': 1,
        'name|1': [
          '北京同仁医院',
          '北京协和医院',
          '天津第一人民医院',
          '上海市中心医院',
          '广州市第一人民医院',
          '大连大学附属医院',
        ],
        'number|1-10000.1-2': 1,
        'unitCost|1-10000.1-2': 1,
        'healthMaterialFee|1-10000.1-2': 1,
        'drugCharge|1-10000.1-2': 1,
        'serviceItemCost|1-10000.1-2': 1,
      },
    ],
  }),
};
