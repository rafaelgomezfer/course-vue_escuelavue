new Vue({
    el: "#app",
    data:{
        nuevaTarea: '',
        tareas: [],
    },
    methods:{
        guardarTarea(){
            this.tareas.push(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    }
})

console.log("Vue Version " +Vue.version);
Vue.config.devtools = true;
/* console.log('sin vue');
const formulario = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');
const tareas = [];

formulario.onsubmit = evento => {
    evento.preventDefault();
    tareas.push(input.value);

    var li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = null;

    console.log(tareas);
}
 */
