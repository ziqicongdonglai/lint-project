<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <div class="wrapper__content__headimg">
        <img src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png" alt="知乎 LOGO" />
      </div>
      <div class="main">
        <div class="sign-content">
          <div>
            <form>
              <div class="sign-tabs">
                <div
                  class="tab"
                  :class="{ 'tab--active': current == index }"
                  v-for="(item, index) in tabs"
                  :key="index"
                  @click="current = index"
                >
                  {{ item }}
                </div>
                <!-- <div class="tab tab--active">免密码登录</div>
                <div class="tab">密码登录</div> -->
              </div>
              <template v-if="current == 1">
                <div class="form-input">
                  <input type="text" placeholder="手机号或邮箱" />
                </div>
                <div class="form-input">
                  <input type="password" placeholder="密码" />
                  <div class="info">
                    <svg
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      data-new-api="EyeFill24"
                      data-old-api="Eye"
                      class="Zi Zi--Eye Button-zi"
                      fill="currentColor"
                    >
                      <path
                        d="M21.675 15.423c-1.392 2.207-4.33 5.294-9.674 5.294-5.34 0-8.28-3.083-9.674-5.29a5.882 5.882 0 01-.392-5.534c1.15-2.605 3.963-6.61 10.066-6.61 6.107 0 8.918 4.01 10.066 6.615a5.88 5.88 0 01-.392 5.525zM9.734 11.937a2.165 2.165 0 012.72-2.093.75.75 0 10.383-1.45 3.669 3.669 0 00-4.603 3.543 3.665 3.665 0 107.216-.908.75.75 0 00-1.453.37 2.168 2.168 0 01-2.098 2.703 2.165 2.165 0 01-2.165-2.165z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="form-input" style="border-bottom: none; justify-content: space-between">
                  <div class="tip">海外手机号登录</div>
                  <div class="info">忘记密码</div>
                </div>
                <button class="login" @click="goHome">注册/登录</button>
              </template>
              <template v-if="current == 0">
                <div class="form-input">
                  <div class="head">
                    中国+86
                    <svg
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      data-new-api="ArrowUpDown24"
                      data-old-api="ArrowUpDown24"
                      class="ZDI ZDI--ArrowUpDown24 Select-arrow"
                      fill="currentColor"
                    >
                      <path
                        d="M12.53 3.47a.75.75 0 00-1.06 0l-5 5a.75.75 0 001.06 1.06L12 5.06l4.47 4.47a.75.75 0 101.06-1.06l-5-5zm-5 11a.75.75 0 00-1.06 1.06l5 5a.75.75 0 001.06 0l5-5a.75.75 0 10-1.06-1.06L12 18.94l-4.47-4.47z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input type="text" placeholder="手机号" style="padding-left: 0.1rem" />
                </div>
                <div class="form-input">
                  <input type="text" placeholder="输入6位短信验证码" />
                  <div class="tip">获取短信验证码</div>
                </div>
                <div class="info">接收语音验证码</div>
                <button class="login" @click="goHome">登录</button>
              </template>
              <div class="login-tip">未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</div>
              <div class="three__login">
                <div class="three__login__tip">社交账号登录</div>
                <div class="three__login__right">
                  <div class="three__login__button">
                    <svg
                      width="20"
                      height="20"
                      fill="#60c84d"
                      viewBox="0 0 24 24"
                      data-new-api="Wechat24"
                      data-old-api="WeChat"
                      class="Zi Zi--WeChat Login-socialIcon"
                    >
                      <path
                        fill="#07C160"
                        d="M19.918 18.357c1.27-.921 2.082-2.282 2.082-3.795 0-2.772-2.698-5.02-6.024-5.02-3.327 0-6.024 2.248-6.024 5.02 0 2.772 2.697 5.02 6.024 5.02.665 0 1.327-.092 1.966-.275l.177-.027c.116 0 .221.036.32.092l1.32.762.115.038a.202.202 0 00.186-.124.202.202 0 00.015-.077l-.032-.147-.272-1.012-.021-.129a.4.4 0 01.168-.326zM9.23 4C5.237 4 2 6.697 2 10.024c0 1.815.973 3.45 2.497 4.554a.48.48 0 01.203.392l-.025.153-.326 1.215-.039.176c0 .134.108.242.24.242l.14-.045 1.583-.914a.756.756 0 01.384-.111l.212.031c.767.22 1.562.332 2.36.331l.397-.01a4.655 4.655 0 01-.243-1.476c0-3.034 2.952-5.494 6.593-5.494l.392.01C15.824 6.201 12.835 4 9.23 4zm4.739 9.76a.803.803 0 110-1.605.803.803 0 010 1.604v.001zm4.016 0a.803.803 0 110-1.605.803.803 0 010 1.604v.001zM6.82 9.06a.963.963 0 110-1.927.963.963 0 010 1.927zm4.82 0a.964.964 0 110-1.927.964.964 0 010 1.927z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    微信
                  </div>
                  <div class="three__login__button">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      data-new-api="Qq24"
                      data-old-api="QQ"
                      class="Zi Zi--QQ Login-socialIcon"
                      fill="#50c8fd"
                    >
                      <path
                        d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.483 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.288.687 6.288 0 0-.688-1.77-1.182-1.77-1.182 2.086-1.77 1.906-3.967 1.906-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.165-6.954-2.165-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    QQ
                  </div>
                  <div class="three__login__button">
                    <svg
                      width="20"
                      height="20"
                      fill="#fb6622"
                      viewBox="0 0 24 24"
                      data-new-api="Weibo24"
                      data-old-api="Weibo"
                      class="Zi Zi--Weibo Login-socialIcon"
                    >
                      <path
                        fill="#FB6622"
                        d="M15.518 3.06c8.834-.854 7.395 7.732 7.394 7.731-.625 1.44-1.673.31-1.673.31.596-7.52-5.692-6.33-5.692-6.33-.898-1.067-.03-1.71-.03-1.71zm4.13 6.985c-.66 1.01-1.376.126-1.375.126.205-3.179-2.396-2.598-2.396-2.598-.72-.765-.091-1.346-.091-1.346 4.882-.55 3.863 3.818 3.863 3.818zM5.318 7.52s4.615-3.86 6.443-1.328c0 0 .662 1.08-.111 2.797.003-.003 3.723-1.96 5.408.16 0 0 .848 1.094-.191 2.648 0 0 2.918-.099 2.918 2.715 0 2.811-4.104 6.44-9.315 6.44-5.214 0-8.026-2.092-8.596-3.102 0 0-3.475-4.495 3.444-10.33zm10.448 7.792s.232-4.41-5.71-4.207c-6.652.231-6.58 4.654-6.58 4.654.022.39.098 3.713 5.843 3.713 5.98 0 6.447-4.16 6.447-4.16zm-9.882.86s-.06-3.632 3.804-3.56c3.412.06 3.206 3.164 3.206 3.164s-.026 2.98-3.684 2.98c-3.288 0-3.326-2.584-3.326-2.584zm2.528 1.037c.672 0 1.212-.447 1.212-.998 0-.55-.543-.998-1.212-.998-.672 0-1.215.447-1.215.998 0 .551.546.998 1.215.998z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    微博
                  </div>
                </div>
              </div>
              <div class="login__bottom">
                <div class="login__bottom__item">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    data-new-api="BadgeCertFill24"
                    data-old-api="BadgeCert"
                    class="Zi Zi--BadgeCert css-1v994a0"
                  >
                    <path
                      fill="#0F88EB"
                      d="M2.64 13.39c1.068.894 1.808 2.733 1.66 4.113l.022-.196c-.147 1.384.856 2.4 2.24 2.278l-.198.016c1.387-.122 3.21.655 4.083 1.734l-.125-.154c.876 1.084 2.304 1.092 3.195.027l-.127.152c.894-1.068 2.733-1.808 4.113-1.66l-.198-.022c1.386.147 2.402-.856 2.279-2.238l.017.197c-.122-1.388.655-3.212 1.734-4.084l-.154.125c1.083-.876 1.092-2.304.027-3.195l.152.127c-1.068-.895-1.808-2.732-1.66-4.113l-.022.198c.147-1.386-.856-2.4-2.24-2.279l.198-.017c-1.387.123-3.21-.654-4.083-1.733l.125.153c-.876-1.083-2.304-1.092-3.195-.027l.127-.152c-.895 1.068-2.733 1.808-4.113 1.662l.198.02c-1.386-.147-2.4.857-2.279 2.24L4.4 6.363c.122 1.387-.655 3.21-1.734 4.084l.154-.126c-1.083.878-1.092 2.304-.027 3.195l-.152-.127z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      d="M9.78 15.728l-2.633-2.999s-.458-.705.242-1.362c.7-.657 1.328-.219 1.328-.219l1.953 2.132 4.696-4.931s.663-.348 1.299.198c.636.545.27 1.382.27 1.382s-3.466 3.858-5.376 5.782c-.98.93-1.778.017-1.778.017z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path></svg
                  >开通机构号
                </div>
                <div class="login__bottom__item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    data-new-api="HeartFill24"
                    data-old-api="Heart"
                    class="Zi Zi--Heart css-1v994a0"
                    fill="currentColor"
                  >
                    <path
                      d="M12.004 4.934c1.015-.944 2.484-1.618 3.98-1.618 3.48 0 6.53 3.265 6.15 7.614-.11 1.254-.686 2.55-1.458 3.753-.778 1.215-1.79 2.392-2.845 3.419-1.054 1.028-2.168 1.923-3.161 2.566a9.96 9.96 0 01-1.41.777c-.418.182-.862.32-1.268.32s-.848-.137-1.267-.317a9.918 9.918 0 01-1.407-.771c-.992-.64-2.103-1.53-3.156-2.555-1.052-1.024-2.062-2.2-2.84-3.417-.77-1.208-1.346-2.51-1.456-3.775-.38-4.349 2.67-7.614 6.15-7.614 1.484 0 2.983.673 3.988 1.618z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path></svg
                  >无障碍
                </div>
                <div class="login__bottom__item">
                  <svg width="20" height="20" viewBox="0 0 20 20" class="css-1v994a0" fill="none">
                    <path
                      fill="url(#login_bar_logo)"
                      d="M16.131 0H3.87A3.869 3.869 0 000 3.869V16.13A3.869 3.869 0 003.869 20H16.13A3.869 3.869 0 0020 16.131V3.87A3.869 3.869 0 0016.131 0z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M14.9 10.046V7.391l2.67-.137.232-.015c.147-.26.214-.559.192-.857-.02-.071-.059-.19-.178-.163a9.048 9.048 0 01-1.204.207c-.777.092-1.119.116-2.196.193-1.893.14-3.56.205-3.56.205a.722.722 0 00.75.724c.642-.027 1.582-.071 2.531-.119v2.617h-3.616a.753.753 0 00.753.754h2.843v2.008c0 .255-.13.341-.345.347h-1.1a1.187 1.187 0 00.632.742c.244.081.503.109.76.08.385-.02.836-.237.836-1.014V10.8h3.175a.362.362 0 00.361-.362v-.392H14.9z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12.414 8.251a.65.65 0 00-.908-.148l-.107.077 1.187 1.662.635-.457-.807-1.134zm4.147-.057l-.89 1.166.647.472 1.273-1.685-.107-.077a.653.653 0 00-.923.124zM9.737 7.031H6.263v6.065h.858l.112.732 1.154-.732h1.356L9.737 7.03zm-1.465 5.311l-.674.415-.065-.427h-.487V7.785h1.908v4.557h-.682zM5.637 9.761H4.379V7.785h1.436v-.368a.386.386 0 00-.383-.385h-2.24a115.436 115.436 0 01.347-1.018 1.187 1.187 0 00-.68.199.908.908 0 00-.385.551c-.151.416-.296.813-.368 1.05-.136.38-.466 1.048-.466 1.048.248-.002.493-.06.716-.169a1.205 1.205 0 00.575-.822c0-.027 0-.053.024-.086h.65V9.35c0 .142 0 .279-.018.412H2.433a.754.754 0 00-.754.754h1.837a4.955 4.955 0 01-.226 1.035 4.746 4.746 0 01-.845 1.484 9.363 9.363 0 01-.89.845 1.56 1.56 0 001.527-.27 4.21 4.21 0 00.908-1.623c.152-.483.258-.98.318-1.483h1.685v-.38a.362.362 0 00-.356-.362z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.747 11.318l-.658.425 1.418 2.118a1.96 1.96 0 00.19-.629.908.908 0 00-.08-.617l-.87-1.297z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="login_bar_logo"
                        x1="-6.708"
                        x2="25.504"
                        y1="29.91"
                        y2="-8.476"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".42" stop-color="#06F"></stop>
                        <stop offset=".92" stop-color="#00C4FF"></stop>
                      </linearGradient>
                    </defs></svg
                  >下载知乎 App
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      tabs: ['免密码登录', '密码登录'],
      current: 0
    }
  },
  methods: {
    goHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/virables.scss';
.wrapper {
  background-image: url('https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-color: #b8e5f8;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0.5rem;
  box-sizing: border-box;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__headimg img {
      width: 1.28rem;
      height: 0.81rem;
      margin-bottom: 0.24rem;
    }
  }
}
.main {
  width: 4rem;
  background-color: $bgColor;
  padding: 0.15rem 0.2rem;
  padding-bottom: 0;
  border-radius: 0.05rem;
}
.sign-tabs {
  color: $content-fontcolor;
  display: flex;
  .tab {
    font-size: 0.16rem;
    padding: 0.2rem 0;
    margin-right: 0.24rem;
    &--active {
      font-weight: bold;
      border-bottom: 0.03rem solid $active-color;
    }
  }
}

.form-input {
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
  padding: 0.1rem;
  input {
    border: none;
    outline: none;
    padding: 0.1rem;
    padding-left: 0;
    flex: 1;
  }
  input::placeholder {
    color: $text-color;
    font-size: 0.14rem;
  }
}

.head {
  color: $text-color;
  border-right: 0.01rem solid #ccc;
  padding-right: 0.1rem;
  display: flex;
  align-items: center;
}
.tip {
  color: #175199;
}
.login {
  margin-top: 0.3rem;
  padding: 0.1rem 0;
  border: none;
  outline: none;
  width: 100%;
  background-color: $active-color;
  color: $bgColor;
  border-radius: 0.03rem;
  cursor: pointer;
}

.info {
  color: $text-color;
  margin-top: 0.1rem;
  text-align: right;
}

.login-tip {
  font-size: 0.13rem;
  padding: 0.15rem;
  color: gray;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.three__login {
  color: $text-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.15rem 0;
  &tip {
    flex: 1;
  }
  &__right {
    display: flex;
    flex: 1;
    justify-content: end;
  }
  &__button {
    display: flex;
    align-items: center;
    margin-right: 0.2rem;
    svg {
      margin-right: 0.05rem;
    }
  }
}
.login__bottom {
  background: $dark-bgColor;
  display: flex;
  color: $active-color;
  padding: 0.2rem;
  margin: 0 -0.2rem;
  border-radius: 0 0 0.05rem 0.05rem;
  &__item {
    display: flex;
    align-items: center;
    flex: 1;
    svg {
      margin-right: 0.1rem;
    }
  }
}
</style>
