"use strict";

//модификаторы в директивах
// .trim - автоматически обрезать пробелы в начале и конце
// .lazy - v-model синхронизирует ввод с данными по событию инпут, чтобы использовать для синхронизации после события change
// .number - для автом приведения введенного значения к числу

new Vue({
  el: "#app",
  data: {
    // пусть изначально у блока будет хотя бы 100 ширина и цвет серый
    blockWidth: 100,
    blockColor: "#ccc",
    firstNum: 0,
    secondNum: 0,
    result: 0,
    modelData: "",
  },
  methods: {
    changeBlock() {
      return {
        width: this.blockWidth,
        height: this.blockWidth,
        backgroundColor: this.blockColor,
      };
    },
    headingText() {
      if (this.modelData === "") {
        this.modelData = "Заголовок для блока";
      }
    },
    plus() {
      this.result = this.firstNum + this.secondNum;
    },
    minus() {
      this.result = this.firstNum - this.secondNum;
    },
    mult() {
      this.result = this.firstNum * this.secondNum;
    },
    div() {
      this.result = this.firstNum / this.secondNum;
    },
  },
  //создадим не метод, а компьютид - это вычисляемые свойства. В чем отличие - наш компьютид возвращает нам необходимое значение

// если  по клику нужно вывести модалку, то это метод,
// клик - меняем данные
// ставим лайк - т.е. меняем данные - метод - @click="method"
// а вот вывод кол-ва лайков - либо computed либо переменную - {{likeValue}}
// по-простому:
// @click - тут использовать только методы
// {{variable/computed}} - в скобках использовать перемененные либо computed 
//чтобы экономить ресурсы вычисляемые свойства записываем внутри computed

  computed: {
    change(){
        return {
            width: `${this.blockWidth}px`,
            height: `${this.blockWidth}px`,
            backgroundColor: this.blockColor,
        }
    }

  }
});
