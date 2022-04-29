import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

const Home = () => import('../views/Home')
const RightBar = () => import('../components/RightBar')
const Article = () => import('../components/Article')
const Question = () => import('../components/Question')
const News = () => import('../components/News')
const Member = () => import('../views/Member')
const Find = () => import('../views/Find')
const Wait = () => import('../views/Wait')
const Login = () => import('../views/Login')
const Follow = () => import('../views/Follow')
const Recommend = () => import('../views/Recommend')
const Hot = () => import('../views/Hot')
const ZVideo = () => import('../views/ZVideo')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayoutView',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'zhihu.com'
      },
      {
        path: 'zhihu.com',
        components: {
          default: Home,
          right: RightBar
        },
        children: [
          {
            path: '',
            redirect: 'follow'
          },
          {
            path: 'follow',
            name: 'FollowView',
            component: Follow
          },
          {
            path: 'recommend',
            name: 'RecommendView',
            component: Recommend
          },
          {
            path: 'hot',
            name: 'HotView',
            component: Hot
          },
          {
            path: 'zvideo',
            name: 'ZVideo',
            component: ZVideo
          },
          {
            path: 'article/:id?',
            name: 'ArticleView',
            component: Article
          },
          {
            path: 'news',
            name: 'NewsView',
            component: News
          }
        ]
      },
      {
        path: 'memebr',
        name: 'MemberView',
        component: Member
      },
      {
        path: 'zhihu.com/question/:id?',
        name: 'QuestionView',
        component: Question
      },
      {
        path: 'find',
        name: 'FindView',
        component: Find
      },
      {
        path: 'wait',
        name: 'WaitView',
        component: Wait
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
