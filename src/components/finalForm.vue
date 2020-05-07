<template>
  <section class="pricing-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <div style="margin-bottom:0px" class="section-title text-center">
            <h2>Submit Form</h2>
          </div>
          <div style="padding-bottom:45px" class="col">
            <button @click="$emit('backToStrings')" type="button" class="btn btn-secondary">Go back</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1 col-lg-4">
          <div class="pricing-card align-items-center">
            <div class="card-head">
              <h6>{{stringSelect}}</h6>
            </div>
            <img class="card-img-top" :src="modelImage" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">{{modelName}}</h5>
              <div class="text-center">Starting at ${{price}}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <form @submit.prevent="formSubmit" style="position:relative;top:25%;">
            <div class="row">
              <div class="col">
                <input
                  v-model="$v.firstName.$model"
                  type="text"
                  class="form__input form-control"
                  placeholder="First name"
                />
              <div class="error" v-if="(!$v.firstName.required) && (this.submitStatus=='ERROR')">Field is required</div>
              </div>
              <div class="col">
                <input v-model="$v.lastName.$model" type="text" class="form-control" placeholder="Last name" />
              </div>
            </div>
            <div class="row">
              <div class="col">
              <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <input v-model="$v.email.$model" class="form__input form-control" placeholder="Email" />
              </div>
                  <div class="error" v-if="!$v.email.required && this.submitStatus=='ERROR'">Field is required</div>
                  <div class="error" v-if="!$v.email.email">Please enter a valid email address</div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <textarea
                  v-model="$v.textBox.$model"
                  type="textarea"
                  class="form-control"
                  placeholder="Messages or Questions"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button type="submit" class="btn btn-secondary">Submit Order Form</button>
                  <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
                  <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
                  <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var price;
import neckthroughIMG from "@/assets/image/neckthru.jpg";
import boltonIMG from "@/assets/image/bolton.jpg";
import jbassIMG from "@/assets/image/jbass.jpg";
import pressmanIMG from "@/assets/image/pressman.jpg";
import guitarIMG from "@/assets/image/guitar.jpg";
import { required, email } from 'vuelidate/lib/validators'

export default {
  data: function() {
    if (this.model == "neckThrough") {
      if (this.stringSelect == "4-String") {
        price = "4,150";
      }
      if (this.stringSelect == "5-String") {
        price = "4,350";
      }
      if (this.stringSelect == "6-String") {
        price = "4,750";
      }

      return {
        modelName: "Neck-Through Bass",
        modelImage: neckthroughIMG,
        price,
        firstName: "",
        lastName: "",
        email: "",
        textBox: "",
        submitStatus: null
      };
    }
    if (this.model == "boltOn") {
      if (this.stringSelect == "4-String") {
        price = "3,550";
      }
      if (this.stringSelect == "5-String") {
        price = "3,750";
      }
      return {
        modelName: "Bolt-on Bass",
        modelImage: boltonIMG,
        price,
        firstName: "",
        lastName: "",
        email: "",
        textBox: "",
        submitStatus: null
      };
    }
    if (this.model == "jbass") {
      if (this.stringSelect == "4-String") {
        price = "3,150";
      }
      if (this.stringSelect == "5-String") {
        price = "3,350";
      }
      return {
        modelName: "J Bass",
        modelImage: jbassIMG,
        price,
        firstName: "",
        lastName: "",
        email: "",
        textBox: "",
        submitStatus: null
      };
    }
    if (this.model == "pressman") {
      if (this.stringSelect == "4-String") {
        price = "3,350";
      }
      return {
        modelName: "Pressman",
        price,
        modelImage: pressmanIMG,
        firstName: "",
        lastName: "",
        email: "",
        textBox: "",
        submitStatus: null
      };
    }
    if (this.model == "guitar") {
      return {
        price: "5,650",
        modelImage: guitarIMG,
        firstName: "",
        lastName: "",
        email: "",
        textBox: "",
        submitStatus: null
      };
    }
  },
  props: {
    model: String,
    stringSelect: String
  },
  validations: {
    email: {
      required,
      email
    },
    firstName:{
      required
    },
    lastName:{
      required
    },
    textBox:{
      
    }
    },
  methods: {
    formSubmit: function() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        var Airtable = require("airtable");
      var base = new Airtable({ apiKey: "key9r5FWPz4ZULYRw" }).base(
        "app9W39svuVnijyrf"
      );

      base("OrderForms").create(
        [
          {
            fields: {
              /* eslint-disable no-undef */
              "Customer Name": this.firstName+this.lastName,
              "Email": this.email,
              "Model": this.model,
              "Strings": this.stringSelect,
              "Base Price":this.price,
              "Order Message": this.textBox
            }
          }
        ],
        function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function(record) {
            console.log(record.getId());
          });
        }
      );
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
};
</script>

<style>
.row {
  margin-bottom: 3%;
}
.error{
  color:#FFF;
}
.typo__p{
  color:#FFF
}
</style>