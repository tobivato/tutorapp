<template>
  <li>
    <h3>{{ fullname }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actons">
      <router-link :to="coachContactLink">contact</router-link>
      <router-link :to="contactDetailsLink">view deatails</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + this.lastName;
    },
    coachContactLink(){
        return this.$route.path + '/' + this.id + '/contact' // /coaches/c1/contact
    },
    contactDetailsLink(){
        return this.$route.path + '/' + this.id;// /coaches/c1/

    } 
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>