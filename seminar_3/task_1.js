Vue.component("new-component", {
  props: ["title"],
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
  },

  template: `
    <div>
          <h3> {{title}}</h3>
          <p>counter click{{counter}}</p>
          <button @click="increase()">+1</button>
          <button @click="decrease()">-1</button>
      </div>
    `,
});

new Vue({
  el: "#app",
});