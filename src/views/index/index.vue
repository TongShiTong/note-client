<template>
    <div class="index">
      <div class="banner-wrap w1170 clearfix">
        <Banner></Banner>
        <UserBox></UserBox>
      </div>
      <div class="w1170">
        <div class="article-wrap">
          <router-link :to="{name: 'article', params: {id: item._id}}" class="article-item" v-for="(item, index) in content" :key="index">
            <div class="article-msg clearfix">
              <div class="avatar fll">
                <img :src="item.author.avatar">
              </div>
              <div class="author-msg">
                <div class="row1">
                <span class="author-name" v-text="item.author.username">
                莫言
                </span>
                  <span class="divide">
                |
                </span>
                  <span class="article-title" v-text="item.title">
                丰乳肥臀
                </span>
                </div>
                <div class="row2">
                <span class="strong">
                  浏览：<span v-text="item.readnumber">998</span>
                </span>
                  <span class="strong">
                  回复：<span v-text="item.commonnum">2</span>
                </span>
                  <span class="strong">
                  分类：<span v-text="item.category.name">知性文章</span>
                </span>
                </div>
              </div>
      </div>
            <div class="article-content" v-text="item.contentText">
              十三亿人都会用的云笔记
            </div>
          </router-link>

        </div>
      </div>
    </div>
</template>

<script>
  import Banner from '@/components/Banner'
  import UserBox from '@/components/UserBox'
    export default {
      data() {
        return {
          content: []
        }
      },
      components: {
        Banner,
        UserBox
      },
      methods: {
        getData() {
          this.$axios.get('/article').then(res => {
            this.content = res.data
          })
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .index {
    margin-top: 50px;
  }

  .article-wrap {
    margin-top: 30px;
    width: 750px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
  }

  .article-wrap .article-item {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 24px;
    background: #fff;

    .avatar {
      width: 70px;
      height: 70px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .author-msg {
      margin-left: 78px;
    }

    .row1 {
      line-height: 24px;
    }

    .row2 {
      width: 616px;
      padding: 6px;
      border-radius: 6px;
      background: #bbb;
      color: #555;
      line-height: 1.5;
    }

    .author-name {
      font-size: 18px;
      font-weight: 700;
      color: #409eff;
    }

    .article-content {
      font-size: 16px;
      margin: 10px 30px 10px 20px;
    }
  }

</style>
