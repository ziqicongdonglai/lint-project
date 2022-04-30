<template>
  <div>
    <div class="question-item" v-for="(item, index) in list" :key="index">
      <router-link to="/zhihu.com/question/100" class="title">{{
        item.title
      }}</router-link>
      <!-- <router-link to="/zhihu.com/question?id=200" class="title">{{item.title}}</router-link> -->
      <!-- <h3 @click="goQuestion">怎么看待XXX的情况</h3> -->
      <div class="content">
        <!-- <img src="" alt=""> -->
        <div class="info">
          {{ item.info }}
        </div>
      </div>
      <div class="option">
        <div class="good">
          <div class="sup">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              data-new-api="AgreeFill24"
              data-old-api="TriangleUp"
              class="Zi Zi--TriangleUp VoteButton-TriangleUp"
              fill="currentColor"
            >
              <path
                d="M13.792 3.681c-.781-1.406-2.803-1.406-3.584 0l-7.79 14.023c-.76 1.367.228 3.046 1.791 3.046h15.582c1.563 0 2.55-1.68 1.791-3.046l-7.79-14.023z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>赞同{{ item.sup }}</span>
          </div>
          <div class="unsup">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              data-new-api="OpposeFill24"
              data-old-api="TriangleDown"
              class="Zi Zi--TriangleDown"
              fill="currentColor"
            >
              <path
                d="M13.792 20.319c-.781 1.406-2.803 1.406-3.584 0L2.418 6.296c-.76-1.367.228-3.046 1.791-3.046h15.582c1.563 0 2.55 1.68 1.791 3.046l-7.79 14.023z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div class="other">
          <div class="o">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              data-new-api="ChatBubbleFill24"
              data-old-api="Comment"
              class="Zi Zi--Comment Button-zi"
              fill="currentColor"
            >
              <path
                d="M11.982 3C17.211 3 21 7.271 21 12.014c0 1.514-.441 3.072-1.215 4.496a.946.946 0 00-.063.813l.603 2.018c.135.487-.279.847-.738.703l-1.818-.54c-.495-.163-.882.044-1.341.324C15.114 20.602 13.476 21 12 21c-4.464 0-9-3.452-9-9.014C3 7.19 6.87 3 11.982 3z"
              ></path>
            </svg>
            {{ item.comments }}评论
          </div>
          <div class="o">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              data-new-api="PaperplaneFill24"
              data-old-api="Share"
              class="Zi Zi--Share Button-zi"
              fill="currentColor"
            >
              <path
                d="M20.223 1.881a.8.8 0 011.205.778l-1.874 16.393a.9.9 0 01-1.204.742l-4.617-1.692a.7.7 0 00-.83.28l-1.929 3.021c-.43.674-1.474.37-1.474-.43v-3.866a.8.8 0 01.18-.505l5.809-7.15a.595.595 0 00-.897-.782l-5.933 6.357a1.1 1.1 0 01-1.257.251l-4.085-1.847a.8.8 0 01-.08-1.415L20.223 1.88z"
              ></path>
            </svg>
            分享
          </div>
          <div class="o">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              data-new-api="StarFill24"
              data-old-api="Star"
              class="Zi Zi--Star Button-zi"
              fill="currentColor"
            >
              <path
                d="M10.484 3.307c.673-1.168 2.358-1.168 3.032 0l2.377 4.122a.25.25 0 00.165.12l4.655.987c1.319.28 1.84 1.882.937 2.884l-3.186 3.535a.25.25 0 00-.063.193l.5 4.733c.142 1.34-1.222 2.33-2.453 1.782l-4.346-1.938a.25.25 0 00-.204 0l-4.346 1.938c-1.231.549-2.595-.442-2.453-1.782l.5-4.733a.25.25 0 00-.064-.193L2.35 11.42c-.903-1.002-.382-2.604.937-2.884l4.655-.987a.25.25 0 00.164-.12l2.378-4.122z"
              ></path>
            </svg>
            收藏
          </div>
          <div class="o">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              data-new-api="HeartFill24"
              data-old-api="Heart"
              class="Zi Zi--Heart Button-zi"
              fill="currentColor"
            >
              <path
                d="M12.004 4.934c1.015-.944 2.484-1.618 3.98-1.618 3.48 0 6.53 3.265 6.15 7.614-.11 1.254-.686 2.55-1.458 3.753-.778 1.215-1.79 2.392-2.845 3.419-1.054 1.028-2.168 1.923-3.161 2.566a9.96 9.96 0 01-1.41.777c-.418.182-.862.32-1.268.32s-.848-.137-1.267-.317a9.918 9.918 0 01-1.407-.771c-.992-.64-2.103-1.53-3.156-2.555-1.052-1.024-2.062-2.2-2.84-3.417-.77-1.208-1.346-2.51-1.456-3.775-.38-4.349 2.67-7.614 6.15-7.614 1.484 0 2.983.673 3.988 1.618z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            喜欢
          </div>
          <div class="o">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
              data-new-api="Dots24"
              data-old-api="Dots"
              class="Zi Zi--Dots Button-zi"
              fill="currentColor"
            >
              <path
                d="M5.34 12a1.665 1.665 0 11-3.33 0 1.665 1.665 0 013.33 0zm8.325 0a1.665 1.665 0 11-3.33 0 1.665 1.665 0 013.33 0zm8.325 0a1.665 1.665 0 11-3.33 0 1.665 1.665 0 013.33 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data() {
    return {
      list: [
        {
          title: '什么样的人才会听听摇滚？',
          info: '你是新时代摇滚青年，在看了两季乐队综艺后假装热爱上了国摇，手机里有五十个全国各地巡演群。去年你最喜欢的乐队是痛仰乐队，把保护姑娘贯彻落实八字箴言当做朋友圈背景，今年你通过抖音爱上了回春丹，壁纸也换成了我们接吻吧我们不恋爱，在终于分清了电吉他和贝斯之后，你去了趟音乐节，回来之后在群里发，我喜欢的姑娘都喜欢流量明星，我真的好孤独啊。你喜欢跳水，你更喜欢跳水的姑娘，这样你就可以光明正大的在live house里摸女孩的屁股。终于你在新群聊认识了你的新女朋友，她带你回家，你用你五百块钱的破二手琴给她展示了一段C和弦，随后你女朋友发了视频和微博。你笑了笑心满意足地切到微信小号，把这个视频发给十八个扎着哪吒头的萨菲娜，谁能活过你？',
          sup: 345,
          comments: 23,
          id: 1
        },
        {
          title: '今年五一调休为什么那个多人吐槽？',
          info: '1、可能是大家真的卷累了，国家说要重视年轻人躺平的问题，但是目前普通人连房子都很难买得起，以前努力跳一跳还能看到未来，现在拼命跑一跑，都不知道路在哪，为什么不躺平？2、当代年轻人也没那么容易被人割韭菜了。现在找个工作，没双休也就算了，工资又没多少，五险一金全按最低水平缴纳（一金一般还没有），但还要你付出十二分力气。大家已经不是什么都不懂的劳动者了，也开始知道维护自己的合法权益了，至少付出和回报大不要差距这么大。',
          sup: 32,
          comments: 34,
          id: 2
        },
        {
          title: '中国什么时候能称为发达国家？',
          info: '1、可能是大家真的卷累了，国家说要重视年轻人躺平的问题，但是目前普通人连房子都很难买得起，以前努力跳一跳还能看到未来，现在拼命跑一跑，都不知道路在哪，为什么不躺平？2、当代年轻人也没那么容易被人割韭菜了。现在找个工作，没双休也就算了，工资又没多少，五险一金全按最低水平缴纳（一金一般还没有），但还要你付出十二分力气。大家已经不是什么都不懂的劳动者了，也开始知道维护自己的合法权益了，至少付出和回报大不要差距这么大。',
          sup: 986,
          comments: 786,
          id: 3
        },
        {
          title: '中国还要多久能超越美国？',
          info: '这个问题就很荒谬。我们是不是该问问自己，我们为什么要超越美国？超越美国是中国人民的梦想和诉求还是别的原因？超越美国的指标是科技还是经济还是军事或者像59年那时一样用钢铁？一个国家的发展，宏观经济政策的指定和执行，是为了提高人民收入，提高社会福利，稳定物价，提高就业率，提高人均受教育水平，让人过上好日子。还是单纯的为了野心为了凸显所谓制度优势？我就想问，我们为什么要什么什么都盯着美国去超越？超越了我们国家的人民就能过上好日子还是不超越老百姓就活不了了？超越不超越美国和人民生活水平正相关吗？',
          sup: 346,
          comments: 23,
          id: 4
        }
      ]
    }
  },
  methods: {
    goQuestion() {}
  }
}
</script>

<style scoped>
.question-item .content {
  display: flex;
}

.title {
  font-weight: bold;
  font-size: 20px;
  color: #333;
  text-decoration: none;
}

.title:hover {
  color: #175199;
}

.content {
  margin: 10px 0;
}

.content img {
  width: 30%;
  /* background-color: red; */
  margin-right: 15px;
}

.content .info {
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.option {
  display: flex;
  align-items: center;
  width: 75%;
  justify-content: flex-start;
  text-align: center;
}

.option .good {
  width: 20%;
  color: #0077ff;
  display: flex;
}

.sup,
.unsup {
  background: rgba(0, 119, 255, 0.1);
  padding: 10px 5px;
}

.good .sup {
  margin-right: 5px;
}

.good .sup svg {
  margin-right: 5px;
}

.unsup {
  padding: 10px;
}

.option .other {
  display: flex;
  align-items: center;
  width: 60%;
  color: #8590a6;
}

.o {
  flex: auto;
  display: flex;
  align-items: center;
}

.o svg {
  margin-right: 5px;
}
</style>
