const mockData = require('./chart')

const sales = {
  trend: [
    {
      key: '同周比',
      value: 0.12
    },
    {
      key: '日环比',
      value: -0.11
    }
  ],
  daily: 12423,
  total: 126566,
  totalDetails: mockData.randomData // chart
}

const visitors = {
  daily: 1234,
  chart: mockData.fakeData,
  total: 8846
}

const payments = {
  total: 6560,
  chart: mockData.fakeData, // simulate fake datasets
  rate: 0.6
}

const operations = {
  influence: 0.78, // chart
  trend: [
    {
      key: '同周比',
      value: 0.12
    },
    {
      key: '日环比',
      value: -0.11
    }
  ],
  conversion: 0.6
}

const rank = []
for (let i = 0; i < 7; i++) {
  rank.push({
    name: `工专 ${i} 号店`,
    value: 323234
  })
}

const rankList = rank

const searchData = {
  total: {
    value: 12321,
    trend: 0.171
  },
  average: {
    value: 2.7,
    trend: -0.262
  },
  chart: mockData.randomData50
}

const salesType = mockData.salesType

module.exports = {
  sales,
  visitors,
  payments,
  operations,
  rankList,
  searchData,
  salesType
}
