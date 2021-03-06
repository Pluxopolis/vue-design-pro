<template>
  <div class="step-form__container">
    <el-form
      class="confirm__form"
      ref="confirmForm"
      :model="confirmForm"
      label-width="30%"
      size="small"
      :rules="rules"
      status-icon
    >
      <el-alert
        class="confirm__form__alert"
        :title="text.alert"
        show-icon
        type="warning">
      </el-alert>
      <el-form-item
        :label="text.payAccount"
      >{{form.payAccount}}</el-form-item>
      <el-form-item
        :label="text.receiverAccount"
      >{{form.receiverAccount}}（{{convertType}}）</el-form-item>
      <el-form-item
        :label="text.receiverName"
      >{{form.receiverName}}</el-form-item>
      <el-form-item
      :label="text.amount"
      >
        <div class="confirm__form__highlight">{{form.amount}}</div>
      </el-form-item>
      <div class="confirm__form__divider"></div>

      <el-form-item :label="text.password" prop="password">
        <el-input
          type="password"
          placeholder='Password: admin'
          v-model="confirmForm.password"
          :style="{ width: '80%' }"
          clearable>
          <i slot="prefix" class="el-input__icon el-icon-goods"></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="onSubmit"
        >{{text.submit}}</el-button>
        <el-button type="plain" @click="onCancel">{{text.cancel}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      confirmForm: {
        password: 'admin'
      },
      loading: false,
      rules: {
        password: [
          {
            required: true,
            message: this.$t('form.step.rulesPassword'),
            trigger: 'blur'
          }
        ]
      },
      text: {
        submit: this.$t('form.step.confirm.submit'),
        cancel: this.$t('form.step.confirm.cancel'),
        alert: this.$t('form.step.confirm.alert'),
        payAccount: this.$t('form.step.confirm.payAccount'),
        receiverAccount: this.$t('form.step.confirm.receiverAccount'),
        receiverName: this.$t('form.step.confirm.receiverName'),
        amount: this.$t('form.step.confirm.amount'),
        password: this.$t('form.step.confirm.password'),
        tipsTitle: this.$t('form.step.confirm.tipsTitle'),
        tipsMessage: this.$t('form.step.confirm.tipsMessage')
      }
    }
  },

  methods: {
    updateBreadcrumb () {
      this.$emit('updateBreadcrumb', 'confirm')
    },
    pushForm () {
      this.loading = true
      this.pushStepForm(this.confirmForm.password)
        .then(() => {
          this.loading = false
          this.$router.push('success')
        })
        .catch((e) => {
          this.loading = false
          this.$notify.error({
            title: this.text.tipsTitle,
            message: this.text.tipsMessage
          })
          console.error(e)
        })
    },
    onSubmit () {
      this.$refs.confirmForm.validate()
        .then(this.pushForm)
        .catch(err => console.error(`[validate]: ${err}`))
    },
    onCancel () {
      this.$router.push('info')
    },
    ...mapActions('formStep', [
      'pushStepForm'
    ])
  },

  computed: {
    convertType () {
      return this.form.receiverType === 'alipay' ? '支付宝' : '银行账号'
    },
    ...mapState('formStep', [
      'form'
    ])
  },

  created () {
    this.updateBreadcrumb()
  }
}
</script>

<style lang="sass" scoped>
@import '~STYLE/color/border.sass'

.confirm
  &__form
    margin: 40px auto 0
    max-width: 500px

    &__alert
      margin-bottom: 24px

    &__highlight
      font-size: 20px
      font-weight: 500

    &__divider
      margin: 24px 0
      height: 1px
      width: 100%
      background-color: $border-light
</style>
