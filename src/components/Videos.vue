<template>
  <div class="landing-page">
    <p>New football videos</p>
    <div class="filters">
      <input type="text" v-model="searchByTeam" placeholder="Search by team">
    </div>
    <article
      v-for="video in filteredTeams" 
      :key="video.title"
      class="video-content"
    >
      <section>
        <div class="video-title">
          <div>
            <a
              :href="video.matchviewUrl"
              target="_blank"
              :title="video.title"
            >
              {{ video.videos[0].title}}
            </a>
            <p>Date: {{ new Intl.DateTimeFormat("en").format(new Date(video.date))}}</p>
          </div>
          <a 
            :href="video.competitionUrl"
            target="_blank"
            :title="video.competition"
          >
            {{ video.competition }}
          </a>
        </div>
        <div class="video-info">
          <strong>Match: {{ video.title.replace('-', 'x') }}</strong>
          <a
            :href="video.matchviewUrl"
            target="_blank"
          >
            <img
              :src="video.thumbnail" 
              :title="video.title" 
              :alt="video.thumbnail"
            >
          </a>
          <strong>Matchview link: <a :href="video.matchviewUrl">{{ video.matchviewUrl }}</a></strong>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data(){
    return{
      videos: [],
      searchByTeam: '',
    }
  },
  async created(){
    const response = await api.get('video-api/v3/')
    this.videos = response.data.response.slice(0,40)
  },
  computed:{
    filteredTeams(){
      return this.videos.filter(item => {
        return item.title.toLowerCase().includes(this.searchByTeam.toLowerCase())
      })
    },
  }
}
</script>

<style scoped>
  .landing-page{
    background: #fafafa;
    height: 100%;
  }
  .landing-page > p{
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: #ccc;
    text-shadow: 2px 2px #000000;
    padding: 20px;
  }
  .filters{
    display: flex;
    justify-content: center;
  }
  .filters input{
    width: 30%;
    max-width: 100%;
    height: 30px;
    border-radius: 8px;
    padding-left: 8px;
  }
  .filters > input{
    margin-left: 20px;
  }
  .video-title{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #69BB6C;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 20px 0;
    padding: 20px;
  }
  .video-title a {
    text-shadow: 2px 2px #000000;
  }
  .video-title a, .video-title p{
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
  }
  .video-info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .video-info strong{
    margin: 30px 0;
    font-size: 24px;
  }

  .video-info img{
    width: 480px;
    height: 360px;
    max-width: 100%;
  }
</style>