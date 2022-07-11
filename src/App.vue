<template>
    <div class="header"><h1>todos.</h1></div>

    <add-input
    @add-inputs="add"></add-input>
    <show-item
    v-for="work in works"
    :key="work.id"
    :name = "work.name"
     @del-item="del(work.id)"
     ></show-item>
    <div class="appreciation">
    <h2>Made my Ayush Deb </h2>
    <h2>Copyrights of <a :href="site"><span>Nirma University License</span></a></h2>    </div>
</template>



<script>
export default{

    data(){
        return{
            site:'https://nirmauni.ac.in/', 
            works:[]
        }
    }
    ,methods:{
        add(name){
            const obj = {
                id:new Date().toISOString(),
                name:name
            }
            this.works.push(obj)
        },
        del(id){
           this.works = this.works.filter(work=> work.id !== id)
        }
}
}
</script>

<style>



@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100&family=Montserrat:wght@100&family=Questrial&display=swap');



*{
    background-color:#E9E7E9;
}
.header{
    text-align: center;
    margin-top:150px;
    font-size: 80px;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 100;
    color: #7747FE;
    transition-duration: 0.3s;
    text-shadow:2px 5px #E9206B
}
.header:hover{
   transform:scale(1.1)
}
.appreciation{
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    text-align: center;
   
}
span{
  color: #E9206B;
}

a{
    text-decoration:none;
}

</style>