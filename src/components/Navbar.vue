<template>
  <div>
    <nav class="navbar">
      <div class="logo">
        <a href="/">Sports online</a>
      </div>
      <div class="createdby">
        <span>Created by <a href="https://github.com/MarceloCChaves">Marcelo Chaves</a></span>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.navbar{
  width: 100%;
  height: 100px;
  max-width: 100%;
  background: #69BB6C;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
.createdby span{
  color: #fff;
  font-size: 20px;
  text-shadow: 1 1 1 10px;
}
.createdby a{
  color: #fff;
}
.logo a{
  font-size: 40px;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
</style>