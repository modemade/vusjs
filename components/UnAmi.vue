<template>
  <div class="container my-1">
    <ul class="list-group">
      <h2 class="list-group-item">{{ leNom }} {{ premium ? '(Ami premium)' : '(Ami nul)' }}</h2>
      <button @click="afficherPremium" class="btn btn-danger">Premium ?</button>
      <button @click="afficherDetails" class="btn btn-primary">{{ detailsVisibles ? 'Masquer' : 'Afficher' }}</button>
      <ul v-if="detailsVisibles" class="list-group">
        <li class="list-group-item">{{ lePhone }}</li>
        <li class="list-group-item">{{ leMail }}</li>
      </ul>
    </ul>
    <input v-on:click="$emit('delete', id)" type="submit" value="Delete" class="btn btn-danger">
  </div>
</template>

<script>
export default {
  emits: ['mon-event-premium', 'delete'],
  //   emits:{
  // 'mon-event-premium':function(id){
  //   if(id){
  //     return true;
  //   }else{
  //     console.warn('blablalballbal')
  //     return false;
  //   }
  // }
  //   },
  // props:[
  //     'leNom',
  //     'lePhone',
  //     'leMail',
  //     'premium'
  // ],
  data() {
    return {
      props: {
        id: { type: String, required: true },
        leNom: { type: String, required: true },
        lePhone: { type: String, required: true },
        leMail: { type: String, required: true },
        premium: {
          type: Boolean, required: false, default: false
          // ,validator:function(value){
          //   return value ==='1' || value ==='0';
          // }
        },
      },
      detailsVisibles: false,
      // unPote:{
      //     id:'jojo',
      //     name:"jojoLeBarjo",
      //     phone:'123 12346 24',
      //     email:'jojo@barjo.com',
      // },
      // Pour contourner le pb des props on passe par une data, elle on pourra la modifier dans ce composant

      // premiumData: this.premium
    }
  },
  methods: {
    afficherDetails() {
      this.detailsVisibles = !this.detailsVisibles;
    },
    // afficherPremium(){
    //     if(this.premiumData ==='1'){
    //         this.premiumData = '0';
    //     }
    //     else{
    //         this.premiumData = '1';
    //     }
    // }
    afficherPremium() {
      // this.premiumData = !this.premiumData;
      this.$emit('mon-event-premium', this.id);
    }
  },
}
</script> 