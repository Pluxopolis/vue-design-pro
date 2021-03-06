<template>
  <page-header :links="breadcrumb">
    <el-row>
      <el-col
        class="workspace__user-detail"
        :xs="24" :sm="18" :md="18" :lg="18" :xl="18"
      >
        <div class="workspace__avatar__placeholder">
          <img
            height="72"
            width="72"
            src="~STATIC/user.png"
            alt="avatar"
            class="workspace__avatar">
        </div>
        <div class="workspace__detail__content">
          <h3 class="content__title">{{createTitle}}</h3>
          <p class="content__main">{{createDescription}}</p>
        </div>
      </el-col>
      <!-- user abstract start -->
      <el-col
        class="workspace__user-abstract"
        :xs="24" :sm="6" :md="6" :lg="6" :xl="6"
      >
        <div class="abstract__sum">
          <h3 class="abstract__sum__title">{{title.sum}}</h3>
          <span class="abstract__sum__value">{{abstract.sum}}</span>
        </div>
        <div class="abstract__rank">
          <h3 class="abstract__rank__title">{{title.rank}}</h3>
          <span class="abstract__rank__value">{{abstract.rank.rank}}</span>
          <span class="abstract__rank__total">/{{abstract.rank.total}}</span>
        </div>
        <div class="abstract__visitors">
          <h3 class="abstract__visitors__title">{{title.visitors}}</h3>
          <span
            class="abstract__visitors__value"
          >{{decimalNumber(abstract.visitors)}}</span>
        </div>
      </el-col>
    </el-row>
  </page-header>
</template>

<script>
import PageHeader from 'COMPONENTS/PageHeader'
import { decimalNumber } from 'COMPONENTS/utils'

export default {
  props: {
    currentUser: {
      type: Object,
      default () {
        return {
          name: 'username',
          position: 'default',
          department: 'user\'s department'
        }
      }
    },
    title: {
      type: Object,
      default () {
        return {
          sum: '项目总数',
          rank: '团队内排名',
          visitors: '项目访问'
        }
      }
    },
    abstract: {
      type: Object,
      default () {
        return {
          sum: 56,
          rank: {
            rank: 8,
            total: 24
          },
          visitors: 2333
        }
      }
    }
  },

  data () {
    return {
      breadcrumb: [
        {
          name: '首页',
          path: '/dashboard/analysis'
        },
        {
          name: 'Dashboard'
        },
        {
          name: '工作台'
        }
      ]
    }
  },

  computed: {
    createTitle () {
      const now = new Date().getHours()
      const user = this.currentUser
      let greeting = '上午好'
      switch (true) {
        case now >= 11 && now < 13:
          greeting = '中午好'
          break

        case now >= 13 && now < 19:
          greeting = '下午好'
          break

        case now >= 19:
          greeting = '晚上好'
          break
      }
      return `${greeting}，${user.name}，祝你开心每一天。`
    },
    createDescription () {
      const user = this.currentUser
      return `${user.position} | ${user.department}`
    }
  },

  mixins: [{
    methods: {
      decimalNumber
    }
  }],

  components: {
    PageHeader
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/background.sass'

.workspace
  &__user-detail
    margin-bottom: 16px

  &__user-detail, &__user-abstract
    display: flex

  &__avatar__placeholder
    flex: 0 1 72px
    position: relative
    padding-top: 72px
    margin-bottom: 8px

  &__avatar
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0

  &__detail__content
    flex: 1 1 auto
    margin-left: 24px

    .content
      &__title
        margin: 0 0 12px 0
        font-size: 20px
        font-weight: 500
        line-height: 28px
        color: rgba(0,0,0,.85)

      &__main
        color: rgba(0,0,0,.45)

.abstract
  &__sum, &__rank, &__visitors
    flex: 1
    text-align: center
    font-size: 0

    &__title
      margin: 0 0 8px
      font-size: 14px
      color: rgba(0, 0, 0, .45)

    &__value
      margin: 0
      color: rgba(0, 0, 0, .85)
      font-size: 30px
      line-height: 38px

  &__rank__total
    font-size: 20px
    color: rgba(0, 0, 0, .45)

</style>
