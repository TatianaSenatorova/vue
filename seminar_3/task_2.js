// Создайте компонент списка дел, в котором можно
// добавлять и удалять элементы. Каждый элемент списка
// должен иметь кнопку удаления, при нажатии на которую
// элемент списка будет удаляться

new Vue({
  el: "#app",
  data: {
   newEl: '',
   elements: []
    },
    methods: {
        addEl(){
            this.elements.push({id: Date.now(), name: this.newEl});
            this.newEl = '';
        },
        delEl(id){
            const index = this.elements.findIndex(item => item.id === id);
            this.elements.splice(index, 1);
            //this.elements = this.elements.filter(item => item.id !== id); - оптимальнее вариант
        }
    }
})

// еще одно решение:
// крутое решение, так как мы сразу в функцию удаления передаем индекс элемента из массива:  <li v-for="(task, index) in tasks" :key="index">{{ task }} <button @click="deleteTask(index)">X</button></li>

// Vue.component("task-manager", {
//     data() {
//     return {
//     newTask: "",
//     tasks: [],
//     };
//     },
    
//     template: `
//     <div style="margin-bottom: 50px">
//     <h2>Task 2. Simple Task Manager</h2>
//     <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Новая заметка">
//     <button @click="addTask">Добавить</button>
//     <ul>
//     <li v-for="(task, index) in tasks" :key="index">{{ task }} <button @click="deleteTask(index)">X</button></li>
//     </ul>
//     </div>
//     `,
//     methods: {
//     addTask() {
//     if (this.newTask !== "") {
//     this.tasks.push(this.newTask);
//     this.newTask = "";
//     }
//     },
//     deleteTask(index) {
//     this.tasks.splice(index, 1);
//     },
//     },
//     });

