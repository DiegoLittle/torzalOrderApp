<template>
  <div>
    <section id="models" class="pricing-section">
      <div class="shape">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <h2>Order Form</h2>
              <h4 style="color:#fff">Choose your base model</h4>
              <!-- <p>We designed and tested prototypes that helped identify pain points in the account creation process. Together, we shaped the new standard.</p> -->
            </div>
          </div>
        </div>
        <div class="card-deck">
          <div style="cursor: pointer;" @click="$emit('modelView', 'neckThrough')" class="card">
            <img class="card-img-top" :src="neckthrough" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">Neck-Through Bass</h5>
              <div class="text-center">Starting at $4,150</div>
            </div>
            <!-- <div class="card-footer">
                    <h4 class="text-center">Test</h4>
            </div>-->
          </div>
          <div style="cursor: pointer;" @click="$emit('modelView', 'boltOn')" class="card">
            <img class="card-img-top" :src="bolton" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">Bolt-on Bass</h5>
              <div class="text-center">Starting at $3,550</div>
            </div>
          </div>
          <div style="cursor: pointer;" @click="$emit('modelView', 'jbass')" class="card">
            <img class="card-img-top" :src="jbass" alt="Torzal jbass image" />
            <div class="card-body">
              <h5 class="card-title text-center">J Bass</h5>
              <div class="text-center">Starting at $3,150</div>
            </div>
          </div>
          <div style="cursor: pointer;" @click="$emit('modelView', 'pressman')" class="card">
            <img class="card-img-top" :src="pressman" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">Pressman</h5>
              <div class="text-center">Starting at $2,700</div>
            </div>
          </div>
          <div style="cursor: pointer;" @click="$emit('modelView', 'guitar')" class="card">
            <img class="card-img-top" :src="guitar" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title text-center">Guitar</h5>
              <div class="text-center">Starting at $5,650</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script src="assets/js/plugins/jquery.meanmenu.js"></script>
<script>
import neckthrough from "@/assets/image/neckthru.jpg";
import bolton from "@/assets/image/bolton.jpg";
import jbass from "@/assets/image/jbass.jpg";
import pressman from "@/assets/image/pressman.jpg";
import guitar from "@/assets/image/guitar.jpg";

// import neckthrough from '@/assets/image/neckthru1-min.jpg'
// import neckthrough from '@/assets/image/neckthru1-min.jpg'
// import neckthrough from '@/assets/image/neckthru1-min.jpg'
// import neckthrough from '@/assets/image/neckthru1-min.jpg'

export default {
  data: function() {
    return {
      neckthrough: neckthrough,
      bolton: bolton,
      jbass: jbass,
      pressman: pressman,
      guitar: guitar,
    };
  },
  methods: {
    stringThrough: function() {}
  }
};
</script>

<style>
</style>