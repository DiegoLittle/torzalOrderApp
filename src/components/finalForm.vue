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
          <form style="position:relative;top:25%;">
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <textarea type="textarea" class="form-control" placeholder="Messages or Questions" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button type="submit" class="btn btn-secondary">Submit Order Form</button>
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
        price
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
        modelName:"Bolt-on Bass",
        modelImage: boltonIMG,
        price
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
        modelName:"J Bass",
        modelImage: jbassIMG,
        price
      };
    }
    if (this.model == "pressman") {
                if (this.stringSelect == "4-String") {
        price = "3,350";
      }
      return {
        modelName:"Pressman",
        price,
        modelImage: pressmanIMG
      };
    }
    if (this.model == "guitar") {
      return {
        price: "5,650",
        modelImage: guitarIMG
      };
    }
  },
  props: {
    model: String,
    stringSelect: String
  }
};
</script>

<style>
.row {
  margin-bottom: 3%;
}
</style>