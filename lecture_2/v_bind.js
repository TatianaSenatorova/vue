'use strict';

//привязывает значение атрибута. если мы вот так ссылке зададим href a href="linkHref", то программа не поймет. a v-bind:href="linkHref" - вот так поймет. Можно и нужно сокращать: a :href="linkHref"

new Vue({
    el: '#app',
    data: {
        linkHref: 'product.html',
        imgPhoto: 'photo.jpeg',
        styleBlock: {
            backgroundColor: 'green',
            color: 'red',
        }
    },
    methods:{
        
    }
})