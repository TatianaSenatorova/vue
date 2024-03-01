//как мы понимаем, что здесь vue, а не js? нам нужно создать new vue
//устанавливаем снипеты для vue(vue language, vue snippets (vue-Is), vue vscode snippets,  )

//во вью элементный подход. el - это элемент и '#app'(элемент, к кот мы обращаемся). во вью переменные хранятся отдельно, функции отдельно. data - это наши данные

//допустим, мы хотим поменять данные в заголовкe h2 - делаем функцию
new Vue({
  el: "#app",
  data: {
    productAddInCart: true, //изначально товар не добавлен в корзину
    message: "hello vue", //как вывести это сообщение внутри заголовка h1?
    counter: 0,
    //будем передавать координаты
    x: 0,
    y: 0,
    bigText: `<span> new text <a href="#">info</a></span>`,
  },
  methods: {
    // sayHello() {
    //     this.message = 'new message'; //js code мы можем размещать внутри функции. this - это обращение к нашим данным. В этом случае одинаковый тексе 'new message' окажется в обоих заголовках: h1, h2
    //     return this.message;
    // },
    changeText() {
      this.message = "Text click";
    },
    // можно ли в функцию передать event?
    increase(step, event) {
      this.counter += step;
      console.log(event);
    },
    mouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
});
