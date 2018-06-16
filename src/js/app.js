var app = new Vue({
    el: '#app',
    data: {
        editingName:false,
        resume:{
            name:'姓名',
            gender:'男',
            birthday:'1994年12月',
            jobTitle:'前端工程师',
            phone:'12345678901',
            email:'example@example.com'
        }
    },
    methods:{
        onEdit(key,value){
            this.resume[key] = value
        }
    }
})