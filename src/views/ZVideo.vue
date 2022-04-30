<template>
  <div>
    <div class="list-card">
      <div v-for="(item, index) of vidList1" class="list-card-item" :key="index">
        <div>
          <img :src="item.background" alt="" class="img" />
          <div class="info1">
            <div class="play">{{ item.play }}</div>
            <div class="play">{{ item.time }}</div>
          </div>
        </div>
        <div class="title" @click="toDetail(item.id)">
          {{ item.title }}
        </div>
        <div class="info2">
          <div class="name">{{ item.name }}</div>
          <div class="points"><h3>...</h3></div>
        </div>
      </div>
    </div>

    <div class="list-card">
      <div v-for="(item, index) of vidList2" class="list-card-item" :key="index">
        <div>
          <img :src="item.background" alt="" class="img" />
          <div class="info1">
            <div class="play">{{ item.play }}</div>
            <div class="play">{{ item.time }}</div>
          </div>
        </div>
        <div class="title" @click="toDetail(item.id)">
          {{ item.title }}
        </div>
        <div class="info2">
          <div class="name">{{ item.name }}</div>
          <div class="points"><h3>...</h3></div>
        </div>
      </div>
    </div>

    <div class="list-card">
      <div v-for="(item, index) of vidList3" class="list-card-item" :key="index">
        <div>
          <img :src="item.background" alt="" class="img" />
          <div class="info1">
            <div class="play">{{ item.play }}</div>
            <div class="play">{{ item.time }}</div>
          </div>
        </div>
        <div class="title" @click="toDetail(item.id)">
          {{ item.title }}
        </div>
        <div class="info2">
          <div class="name">{{ item.name }}</div>
          <div class="points"><h3>...</h3></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZVideo',
  data() {
    return {
      vidList1: [
        {
          id: 1,
          background: 'https://pic1.zhimg.com/v2-58a2c2315a20f5a316d478b348406907_640w.jpg?source=12a79843',
          title: '家里有前列腺不好的，打冲门30下，排出污浊',
          name: '风行运动生活',
          play: '43.3万播放',
          time: '1:55'
        },
        {
          id: 2,
          background: 'https://pic3.zhimg.com/v2-e8c434c9e10b0ffbd3f524d49476ef0d_640w.jpg?source=12a79843',
          title: '20分钟看完唐迟老师阅读技巧笔记！',
          name: '鸟山学长',
          play: '61万播放',
          time: '9:03'
        },
        {
          id: 3,
          background: 'https://pica.zhimg.com/v2-69066366950df061ecaaef2cea3b9c75_640w.jpg?source=12a79843',
          title: '科普打假后，我被商家辱骂威胁',
          name: '姚为名',
          play: '336万播放',
          time: '4:39'
        }
      ],
      vidList2: [
        {
          id: 4,
          background: 'https://pica.zhimg.com/v2-9f1f11c56b3d9fc956635ba9a5b44266_640w.jpg?source=12a79843',
          title: '令人惊艳的家庭教育方式，好羡慕这样的妈妈，孩子长大肯定成...',
          name: '丽君妈咪育儿',
          play: '14.5万播放',
          time: '2:21'
        },
        {
          id: 5,
          background: 'https://pic1.zhimg.com/v2-f97f72fff71ec0eb1601d276f9e49d9f_640w.jpg?source=12a79843',
          title: '沙里加盐和白酒作用这么大，解决生活中的大难题！每个人都该...',
          name: '厨艺不精',
          play: '21.5万播放',
          time: '5:07'
        },
        {
          id: 6,
          background: 'https://pic2.zhimg.com/v2-3a5d450e77b1edc6b488254c624e9888_640w.jpg?source=12a79843',
          title: '明明就是同一首歌，国语和韩语的差别也太大了，网友：完全两...',
          name: '音乐Wu哥',
          play: '6.4万播放',
          time: '1:36'
        }
      ],
      vidList3: [
        {
          id: 7,
          background: 'https://pic2.zhimg.com/v2-b8a29a984093953d6ebb47bf5031c82b_640w.jpg?source=12a79843',
          title: '七百多斤妇女的减肥之路，老公一直不离不弃，最终减肥成功...',
          name: '十八子金名',
          play: '14.5万播放',
          time: '2:21'
        },
        {
          id: 8,
          background: 'https://pic2.zhimg.com/v2-5e5def33a1d97fa8df8dbba10a4b5ef2_640w.jpg?source=12a79843',
          title: '如何自制焦香贴骨大猪排？香得白天跑不掉，晚上睡不着！',
          name: '德国人Leo乐柏说',
          play: '21.5万播放',
          time: '5:07'
        },
        {
          id: 9,
          background: 'https://pic2.zhimg.com/v2-0ac95803335f759889b57db99246ab2d_640w.jpg?source=12a79843',
          title: '小狗认错妈妈，满脸失落的走开',
          name: '蒙面鸟哥',
          play: '6.4万播放',
          time: '1:36'
        }
      ]
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push('/vids/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-card {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.list-card-item {
  flex: 1;
  border: 0.01rem solid #e4e4e4;
  margin: 0 0.25rem 0.2rem 0;
  padding-bottom: 0.09rem;
  width: 1.5rem;
  height: 0.9rem;
  background: #f9f9f9;
  border-radius: 0.05rem;
  background-size: cover;
}
.img {
  width: 100%;
  height: auto;
  border-radius: 0.05rem;
}
.play {
  color: #f9f9f9;
  font-weight: 600;
}
.title {
  width: 2.5rem;
  height: 0.5rem;
  font-size: 0.15rem;
  line-height: 0.24rem;
  font-weight: 400;
  color: #333;
}
.title:hover {
  color: blue;
  cursor: pointer;
}
.info2 {
  display: flex;
  justify-content: space-between;
  margin: 0.06rem 0.12rem;
}
.info1 {
  display: flex;
  justify-content: space-between;
  margin: -0.27rem 0.12rem 0 0.12rem;
}
h3 {
  color: #959595 !important;
}
.name {
  color: #959595 !important;
}
</style>
