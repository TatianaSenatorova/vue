"use strict";

// 1. Вы разрабатываете страницу для отображения
// информации о товаре. У вас есть объект product, который
// содержит информацию о товаре, включая название, цену
// и URL изображения товара. Вам необходимо отобразить
// эту информацию на странице с использованием v-bind.
// 2. Добавьте кнопку, которая будет изменять цену товара. При
// нажатии на кнопку должна генерироваться скидка на
// товар от 1 до 20% и обновиться цена товара в
// соответствии с значением скидки

new Vue({
  el: "#app",
  data: {
    product: {
      productName: "туфли",
      productPrice: 15000,
      productUrl:
        "https://img.alicdn.com/imgextra/i3/TB1L03KPpXXXXbTXFXXXXXXXXXX_!!0-item_pic.jpg",
      productAlt: "туфли розовые",
    },
  },

  methods: {
    getDiscount() {
      const discount = Math.floor(
        Math.random(
          this.product.productPrice * 0.2 - this.product.productPrice * 0.01
        ) +
          this.product.productPrice * 0.01
      );
      this.product.productPrice -= discount;
    },
  },
});
