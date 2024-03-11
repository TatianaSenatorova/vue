// Создайте компонент списка, который отображает массив
// элементов. Добавьте текстовое поле для фильтрации
// списка. При вводе текста в поле, список должен
// автоматически обновляться, отображая только элементы,
// содержащие введенный текст

Vue.component('task3', {
  props: [],
  data() {
      return {
          filterText: '',
          items: [
              { id: 1, name: 'list 1' },
              { id: 2, name: 'arr 2' },
              { id: 3, name: 'list 3' }
          ]
      };
  },
  methods: {
      delEl() {
          this.counter++
      },

  },
  computed: {
      filteredList() {
          return this.items.filter(item => item.name.toLowerCase().includes(this.filterText));
      }
  },

  template:
      `
      <div>
          <input type="text" v-model="filterText" placeholder="отфильтруй меня">
          <ul>
              <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
          </ul>
      </div>
      `
})