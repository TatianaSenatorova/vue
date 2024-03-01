"use strict";

new Vue({
  el: "#app",
  data: {
    likeToggle: true,
    listItems: [1, 2, 4],
    newList: "",
    data: [
        {
            title: 'title text',
            text: 'description text info element'
        },
        {
            title: 'new title text',
            text: 'new description text info element'
        }
    ]
  },
  methods: {
        addItem() {
        this.listItems.push(this.newList)
    },
  },
});
