// 1. Создать кнопку “Показать еще” при клике на которую появляется
// контент под кнопкой, при повторном клике, контент необходимо
// скрыть
// 2. Добавить анимацию появления текстового блока

new Vue({
  el: "#app",
  data: {
    showBlock: false,
  },
});


//с анимацией
/* <button @click="show=!show">
Раскрыть
</button>
<transition name='fade'>
<img v-if="show" src="https://i.morioh.com/200527/1c406b5e.jpg" alt="" style="width: 720px;">
</transition> */