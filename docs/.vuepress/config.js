import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  title: '御坂美琴の技术博客',
  description: '天津大学硕士生的技术博客 - 三维重建 | Java后端开发',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'Misaka' }],
    ['meta', { name: 'keywords', content: '御坂美琴,技术博客,三维重建,Java,Python,后端开发,天津大学' }]
  ],

  theme: defaultTheme({
    logo: '/images/misaka.jpg',
    
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '开始阅读',
        link: '/get-started'
      },
      {
        text: '技术文章',
        children: [
          {
            text: '学术研究',
            children: [
              '/posts/archive1.md',
              '/posts/archive2.md',
            ]
          },
          {
            text: 'Java开发',
            children: [
              '/posts/article1.md',
              '/posts/article2.md',
              '/posts/article3.md',
              '/posts/article4.md',
            ]
          },
          {
            text: '算法与数据结构',
            children: [
              '/posts/article5.md',
              '/posts/article6.md',
              '/posts/article7.md',
            ]
          }
        ]
      },
      {
        text: '项目展示',
        children: [
          {
            text: '三维重建项目',
            children: [
              '/posts/article8.md',
              '/posts/article9.md',
            ]
          },
          {
            text: 'Java项目',
            children: [
              '/posts/article10.md',
              '/posts/article11.md',
              '/posts/article12.md',
            ]
          }
        ]
      },
      {
        text: '关于我',
        link: '/about'
      }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '📌 置顶文章',
          children: [
            '/posts/sticky.md',
            '/posts/sticky2.md',
          ]
        },
        {
          text: '🎓 学术研究',
          children: [
            '/posts/archive1.md',
            '/posts/archive2.md',
          ]
        },
        {
          text: '☕ Java技术',
          children: [
            '/posts/article1.md',
            '/posts/article2.md',
            '/posts/article3.md',
            '/posts/article4.md',
          ]
        },
        {
          text: '🧮 算法专题',
          children: [
            '/posts/article5.md',
            '/posts/article6.md',
            '/posts/article7.md',
          ]
        },
        {
          text: '🚀 项目实战',
          children: [
            '/posts/article8.md',
            '/posts/article9.md',
            '/posts/article10.md',
            '/posts/article11.md',
            '/posts/article12.md',
          ]
        }
      ]
    },

    // 页面meta
    editLink: false,
    lastUpdated: true,
    contributors: false,

    // 页脚
    footer: 'Made with ❤️ by Misaka | Powered by VuePress',
    displayFooter: true,

    // 搜索
    search: true,
    searchMaxSuggestions: 10
  }),

  // 站点配置
  // GitHub Pages 部署配置
  // 如果你的仓库名是 my-blog，这里应该是 '/my-blog/'
  // 如果使用自定义域名或 username.github.io，则保持 '/'
  base: '/my-blog/',
  lang: 'zh-CN',
  
  markdown: {
    code: {
      lineNumbers: false
    }
  }
})