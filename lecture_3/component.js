"use strict";
// Компонента - это отдельная сущность, поэтому создаем для нее отдельный файл.

const copmItem = {
  name: "comp-item",
  template: `<p>item info</p>`,
};
Vue.component("new-component", {
  // если нам нужны данные, они хранятся в блоке data
  // мы вот этой строкой ниже с props фактически говорим: вот у нас еть с такое атрибут title и мы хотим с ним работать. Наша задача - привязать к атрибуту title любое значение
  props: ["title"],
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    comp: copmItem,
  },
  methods: {
    increase(step) {
      this.counter += step;
    },
  },

  template: `
  <div>
        <h3> {{title}}</h3>
        <comp></comp>
        <p>counter click{{counter}}</p>
        <button @click="increase(2)">+2</button>
    </div>
        
  `,
});

Vue.component("change-tree", {
  template: `
   <ul>
   <li>list item info 1</li>
   <li>list item info 2</li>
   <li>list item info 3</li>
   </ul>
   `,
});

Vue.component("change-one", {
  data(){
return template: `
  <div>
<p> почитать</p>
  </div>
  `,
}
  
});
Vue.component("change-two", {
  template: `
  <ul>
  <li>list item info 1</li>
  <li>list item info 2</li>
  <li>list item info 3</li>
  </ul>
  `,
});
