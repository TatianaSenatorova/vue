"use strict";

// Вы разрабатываете приложение для отображения и сортировки списка товаров. У вас есть массив объектов products, где каждый объект представляет товар с его названием и ценой. Вам необходимо отобразить список товаров и предоставить пользователю возможность сортировать товары по цене (по возрастанию и по убыванию).

new Vue({
  el: "#app",
  data: {
    products: [
      {
        productName: "meat",
        productPrice: 800,
      },
      {
        productName: "bread",
        productPrice: 35,
      },

      {
        productName: "milk",
        productPrice: 65,
      },
    ],
    selectValue: "",
    newProducts: [],
  },
  computed: {
    sortProducts: function (event) {
      if (this.selectValue === "low-price-first") {
        this.newProducts = this.products
          .slice()
          .sort((a, b) => a.productPrice - b.productPrice);
        console.log(this.newProducts);
        return this.newProducts;
      } else if (this.selectValue === "high-price-first") {
        this.newProducts = this.products
          .slice()
          .sort((a, b) => b.productPrice - a.productPrice);
        console.log(this.newProducts);
        return this.newProducts;
      } else {
        this.newProducts = this.products;
        return this.newProducts;
      }
    },
  },
});
