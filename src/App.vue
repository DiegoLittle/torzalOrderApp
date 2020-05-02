<template>
  <div id="app">
    <ModelPage v-on:modelView="display1=false;display2=true;model=$event" v-if="display1"></ModelPage>
    <Strings 
    v-on:backToModels="display1=true;display2=false;" 
    v-bind:model="model" 
    v-if="display2"
    v-on:stringSelect="display3=true;display2=false;stringCount=$event"
    ></Strings>
    <finalForm
    v-bind:model="model" 
    v-bind:stringSelect="stringCount"
    v-if="display3"
    v-on:backToStrings="display2=true;display3=false;" 
    ></finalForm>
  </div>
</template>

<script>
import ModelPage from './components/form'
import Strings from './components/strings'
import finalForm from './components/finalForm'


export default {
  name: 'App',
  components: {
    ModelPage,
    Strings,
    finalForm
  },
  data: function(){
    return{
      display1: true,
      display2: false,
      display3:false
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
