<template>
  <section class="pricing-section">
    <div class="shape"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div style="align-items:center" class="col">
          <div style="margin-bottom:0px" class="section-title text-center">
            <h2>How many Strings?</h2>
          </div>
            <div style="padding-bottom:45px" class="col">
              <button @click="$emit('backToModels')" type="button" class="btn btn-secondary">Go back</button>
          </div>
        </div>
      </div>

      <div class="custom-tab-wrapper monthly" id="pricing-tab-7">
        <div class="row">
          <div class="col">
            <div class="pricing-card">
              <div class="card-head">
                <h6>4-String</h6>
                <h2>
                  <span class="small-title">$</span>
                  <span class="big-txt">{{fourString}}</span>
                </h2>
                <div class="card-btn">
                  <a @click="$emit('stringSelect','4-String')" style="color:#FFF;" class="btn btn--primary">Select</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="pricing-card">
              <div class="card-head">
                <h6>5-String</h6>
                <h2>
                  <span class="small-title">$</span>
                  <span class="big-txt">{{fiveString}}</span>
                </h2>
                <div class="card-btn">
                  <a @click="$emit('stringSelect','5-String')" style="color:#FFF;" class="btn btn--primary">Select</a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="model=='neckThrough'" class="col">
            <div class="pricing-card">
              <div class="card-head">
                <h6>6-String</h6>
                <h2>
                  <span class="small-title">$</span>
                  <span class="big-txt">4,750</span>
                </h2>
                <div class="card-btn">
                  <a @click="$emit('stringSelect','6-String')" style="color:#FFF;" class="btn btn--primary">Select</a>
                </div>
              </div>
            </div>
          </div>

          <div v-if="model=='guitar'" class="col">
            <div class="pricing-card">
              <div class="card-head">
                <h6>6-String</h6>
                <h2>
                  <span class="small-title">$</span>
                  <span class="big-txt">5,650</span>
                </h2>
                <div class="card-btn">
                  <a @click="$emit('stringSelect','6-String')" style="color:#FFF;" class="btn btn--primary">Select</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    if (this.model == "neckThrough") {
      return {
        fourString: "4,150",
        fiveString: "4,350"
      };
    }
    if (this.model == "boltOn") {
      return {
        fourString: "3,550",
        fiveString: "3,750"
      };
    }
    if (this.model == "jbass") {
      return {
        fourString: "3,150",
        fiveString: "3,350"
      };
    }
    if (this.model == "pressman") {
      return {
        fourString: "3,350",
        fiveString: "N/A"
      };
    }
    if (this.model == "guitar") {
      return {
        fourString: "N/A",
        fiveString: "N/A"
      };
    }
  },
  props: {
    model: String
  }
};
</script>

<style>
</style>