<template>
  <div class="register">
    <div class="register-title">
      新用户注册
    </div>
    <div class="input-wrap username-wrap">
      <el-input v-model="formData.username" placeholder="用户名">

      </el-input>
    </div>
    <div class="input-wrap">
      <el-input v-model="formData.email" placeholder="邮箱">

      </el-input>
    </div>
    <div class="input-wrap">
      <el-input v-model="formData.password" placeholder="密码">

      </el-input>
    </div>
    <div class="btn-wrap">
      <el-button type="primary">
        注册
      </el-button>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            formData: {
              username: '',
              email: '',
              password: ''
            }
          }
        }
    }
</script>

<style scoped lang="scss">
  .register {
    width: 700px;
    margin: 80px auto 0;
    padding: 40px;
    background: #fff;
    border-radius: 6px;

    .register-title {
      text-align: center;
      color: #333;
      font-size: 24px;
      font-weight: 500;
    }

    .input-wrap {
      width: 390px;
      margin: 0 auto 30px;
    }

    .username-wrap {
      margin-top: 30px;
    }

    .btn-wrap {
      width: 390px;
      margin: 0 auto 30px;

      /deep/ .el-button {
        width: 100%;
      }
    }
  }

</style>
