<template>
  <div class="loading-wrap">
    <div>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
      <div class="content">{{ tips }}</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
interface Props {
  tips?: string
}
const props = withDefaults(defineProps<Props>(), {
  tips: '加载中...'
})
</script>

<style scoped>
.loading-wrap {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #d0bfff;
}
 
.spinner > div {
  background-color: #d0bfff;
  height: 100%;
  width: 20px;
  display: inline-block;
   
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes sk-stretchdelay {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
/* @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-circle{
  border-style: solid;
  border-color: #000;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1.5s linear infinite;
  -webkit-animation: rotation 1.5s linear infinite;
}
.loading-circle.-small {
  width: 64px;
  height: 64px;
  border-width: 8px;
}
.loading-circle.-normal {
  width: 96px;
  height: 96px;
  border-width: 12px;
}
.loading-circle.-large {
  width: 128px;
  height: 128px;
  border-width: 16px;
} */
</style>