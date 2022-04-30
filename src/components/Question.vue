<template>
<div class="cont">
    <div class="title">
      <h2>什么样的人才会听听摇滚？</h2>
    <ul>
      <li><button>关注问题</button></li>
      <li><button>写回答</button></li>
      <li><button>邀请回答</button></li>
    </ul>
    </div>
    <div>
      <div>
      <img src="../img/huoche.png" class="pic1">
    </div>
    <div class="main">
      <img src="../img/kuaitu1.jpg" class="pic">
      <p class="zuozhe">作者：昨晚那只猫</p>
    </div>
    <div class="word">
      <p>你是新时代摇滚青年，在看了两季乐队综艺后假装热爱上了国摇，手机里有五十个全国各地巡演群。去年你最喜欢的乐队是痛仰乐队，把保护姑娘贯彻落实八字箴言当做朋友圈背景，今年你通过抖音爱上了回春丹，壁纸也换成了我们接吻吧我们不恋爱，在终于分清了电吉他和贝斯之后，你去了趟音乐节，回来之后在群里发，我喜欢的姑娘都喜欢流量明星，我真的好孤独啊。你喜欢跳水，你更喜欢跳水的姑娘，这样你就可以光明正大的在live house里摸女孩的屁股。终于你在新群聊认识了你的新女朋友，她带你回家，你用你五百块钱的破二手琴给她展示了一段C和弦，随后你女朋友发了视频和微博。你笑了笑心满意足地切到微信小号，把这个视频发给十八个扎着哪吒头的萨菲娜，谁能活过你？你是新时代摇滚青年，说唱摇滚流行啥都精通。你在抖音刷到了《河流》，就去网易云关注了蛙池。于是你去看了倒霉星球来的人，觉得翻唱的还不错，去听了从没听过的原版。翻了圈评论，你的想法出现了转变。你感觉耳朵有点脏，留下一句：来洗耳朵了。谁能洗过你？
</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'QuestionView'
}
</script>

<style scoped>
.cont{
  margin: 0;
  padding: 0;
}
h2{
  padding-bottom: 0.2rem;
}
li{
  list-style: none;
  float: left;
  padding-right: 0.1rem;
}
button{
  border-radius: 0.1rem;
  width: 1rem;
  height: 0.5rem;
  background-color: rgb(217, 237, 176);
}
.pic1{
  width: 8.4rem;
  height: 1.5rem;
  padding-top: 0.1rem;
}
.cont .pic{
  width: 0.5rem;
  height: 0.5rem;
  padding-left: 0.1rem;
}
h2{
  font-size: 0.3rem;
}
.zuozhe{
  float: right;
  padding-right: 6rem;
  padding-top: 0.1rem;;
}
</style>
