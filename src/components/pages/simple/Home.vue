<template>
  <div class="row">
    <div class="col-sm-12 col-md-6 columns">
      <h2>Create your own business card for free</h2>
      <h3>Easy Process</h3>
      <p>- Make personalized business cards in minutes.</p>
      <h3>It's Free</h3>
      <p>- Make your business cards for free.</p>
      <h3>Order your favorit designs.</h3>
      <p>- You can buy only your favorit designs.</p>
    </div>
    <div class="col-sm-12 col-md-6 columns">
      <img src="../../../assets/images/homeCards.jpg" alt="Bus" />
    </div>
    <div class="col-sm-12 col-md-6">
      <router-link class="block-item" tag="div" to="/templates">
        <h2 class="home-bolock">Create your own business cards very easily</h2>
      </router-link>
    </div>
    <div class="col-sm-12 col-md-6 columns">
      <router-link class="block-item" tag="div" to="/user/register">
        <h2 class="home-bolock">Create your account and you will have more creation options</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style>
img {
  max-width: 100%;
}
.block-item {
  border: 1px solid #999;
  height: 300px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
}
.block-item .home-bolock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 20px;
  text-align: center;
}
.columns {
    margin-bottom: 30px;
}
</style>


