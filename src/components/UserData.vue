<template>

<div class="container bg-info my-1">
        <form @submit.prevent="submitData">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input v-model="enteredName" class="form-control form-control-sm" type="text" placeholder="votre nom" aria-label=".form-control-sm example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Age</label>
            <input v-model="enteredAge" class="form-control form-control-sm" type="number" placeholder="Votre Age" aria-label=".form-control-sm example">
        </div>           
        <button class="btn btn-primary btn-sm col-12 my-1">MAJ des données</button>
        </form>
    </div>

</template>

<script>
export default ({
    emits:['add-user'],
    data() {
    return{
            enteredName:'',
            enteredAge:'',
    }
    },
    methods:{
    submitData(){
            console.log(this.id);
            this.$emit('add-user', this.enteredName,this.enteredAge);
        }
    },

})
</script>

<style>

</style>