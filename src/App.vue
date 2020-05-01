<template>
  <div id="app">
    <Form v-on:modelView="display1=false;display2=true;model=$event" v-if="display1"></Form>
    <Strings v-on:backToModels="display1=true;display2=false;" v-bind:model="model" v-if="display2"></Strings>
  </div>
</template>

<script>
import Form from './components/form'
import Strings from './components/strings'


export default {
  name: 'App',
  components: {
    Form,
    Strings
  },
  data: function(){
    return{
      display1: true,
      display2: false
    }
  }
  // methods: {
  //   modelSelect: function(){
  //     return{
  //     display1:false,
  //     display2:true
  //     }
  //   }
  // }
}
</script>

<style>
</style>
