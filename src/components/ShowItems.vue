<template>
    <div class="show">
    <div class="col">
    <h1 :class="{'vodos':isdone,'rodos': thisdone}"> {{name}}</h1></div>
   <div class="buts">
    <button type="button"  @click="comps" >{{again}}</button>
    <button type="button" class="vodos" @click="del(id)">X</button></div>

    </div>
</template>


<script>



export default{
    props:{
        name:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            isdone:true,
            thisdone:false,
            again:"Done"
        }
    },
    methods:{
        del(){
            this.$emit('del-item')
        }
        ,
        comps(){
            this.isdone = (!this.isdone)
            this.thisdone = (!this.thisdone)
            console.log(this.isdone)
            console.log(this.thisdone)
            if(this.isdone){
                this.again = "Done"
            }
            else{
                this.again = "Undo"
            }
        }
    }
}



</script>


<style>

.show{
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Montserrat;
    font-size: 12px;


}


.vodos{
    font-size: 20px;
  

    
}
.rodos{
    font-size: 20px;
    text-decoration: line-through;
  

    
}


.item{
    transform: translateX(530px)
}

.col{


    width: 50%;
    display:flex;
    justify-content:center;
    align-items: center;
    

}

.buts{

    width: 32%;
    display:flex;
    justify-content: ;
    align-items: center;
  

}

</style>
