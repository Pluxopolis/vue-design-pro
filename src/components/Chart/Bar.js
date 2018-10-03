import { Bar } from 'vue-chartjs'
import chartConfig from './mixins'

export default {
  extends: Bar,
  mixins: [chartConfig]
}
