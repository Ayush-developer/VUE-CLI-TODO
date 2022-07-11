<template>
    <div class="formy">
    <form  @submit.prevent="Additems">
    <input type="text" placeholder="Add item ..." v-model="names"><button>Add</button>
    </form></div>
</template>


<script>

export default{
    emits:['add-inputs'],
    data(){
        return{
            names:""
        }
    },
    methods:{
        Additems(){
               if(this.names !== ""){
                this.$emit('add-inputs',this.names)
               }
        }
    }
}


</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@100&family=Montserrat:wght@100&family=Questrial&display=swap');

form{
    text-align:center;
    padding: 25px;
    margin-top: -80px;

   
}




input{
    height: 30px;
    margin: 20px;
    width: 250px;
    border:none;
    border-bottom: 1px solid;
    font-family: Montserrat;
    font-size: 15px;

}

input:focus{
     outline: none !important;
}

::placeholder{
    font-family:Montserrat;
    transform:translateY(0px);
    font-size:15px;
    
}
button{
    height: 36px;
    border:none;
    font-family:Montserrat;
    transform:translateY(0px);
    font-size: 15px;
    transition: all 0.3s;
   
}

button:active{
    transform: scale(1.2);
}
</style>