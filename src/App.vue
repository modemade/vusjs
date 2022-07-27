<template>

  <h1 class="text-center">Les Amis</h1>
  <ul class="list-group">
    <active-user @add-ami="ajouterAmi"></active-user>
    <user-data v-for="unAmi in lesAmis" @delete="effacerAmi" :key="unAmi.id" :id="unAmi.id" :leNom="unAmi.name"
      :lePhone="unAmi.phone" :leMail="unAmi.email" :premium="unAmi.premium" @mon-event-premium="afficherStatusPremium">
    </user-data>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      // lesAmis: [
      //   {
      //     id: 'hadock',
      //     name: 'Captain Hadock',
      //     phone: '09876 543 221',
      //     email: 'cap@hadock.com',
      //     premium: false
      //   },
      //   {
      //     id: 'kimonoSurUnFrigo',
      //     name: "Steven Seagal",
      //     phone: '+338765477',
      //     email: 'steven@seagal.com',
      //     premium: false
      //   },
      // ],
    }
  },
  methods: {
    
//     effacerAmi(unId) {
//       this.lesAmis =  this.lesAmis.filter((unePersonne) => unePersonne.id !== unId);
//     },
//     afficherStatusPremium(leIdDansUnAmi) {
//       const unAmiIdentified = this.lesAmis.find(unTruc => unTruc.id === leIdDansUnAmi);
//       unAmiIdentified.premium = !unAmiIdentified.premium;
//     },
//     ajouterAmi(name, phone, email) {
//       const newAmiContact = {
//         id: new Date().toISOString(),
//         name: name,
//         phone: phone,
//         email: email,
//         premium: false,
//       };
//       console.log(this.lesAmis);
//       this.lesAmis.push(newAmiContact);
//     }
//   }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
