<template>
  <section class="contact-info-wrapper">
    <div :class="{'container': !isMobile, 'container-fluid': isMobile}">
      <h1 class="page-title">CONTACT US</h1>
      <div class="contact-info-container">
        <div class="contact-card">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="mt-4 d-block d-md-none"></div>
                <div class="contact-info pt-0">
                  <div class="contact-icon">
                    <i class="contact-icon fal fa-map-marker">
                      <div class="circle circle-red"></div>
                    </i>
                  </div>
                  <p class="contact-title">ADDRESS</p>
                  <p class="contact-value">
                    Gyaneshowr, Kathmandu
                    <br />P.O. BOX: 23888
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="contact-icon fal fa-clock">
                      <div class="circle circle-blue"></div>
                    </i>
                  </div>
                  <p class="contact-title">OPENING HOURS</p>
                  <p class="contact-value">
                    8:00AM - 18:00PM
                    <br />Sun-Fri
                  </p>
                </div>
              </div>
            </div>
            <div class="row d-none d-md-block">
              <div class="col-md-12">
                <div class="seperator"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="contact-icon fal fa-phone-rotary">
                      <div class="circle circle-green"></div>
                    </i>
                  </div>
                  <p class="contact-title">PHONE NUMBERS</p>
                  <p class="contact-value">
                    01-4412624
                    <br />Mobile/Viber/Whatsapp: 9801888822
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="contact-icon fal fa-envelope">
                      <div class="circle circle-yellow"></div>
                    </i>
                  </div>
                  <p class="contact-title">Email Address</p>
                  <p class="contact-value">sales@karkhana.asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h1 class="title">DROP US A LINE</h1>
          <p class="subtitle">
            Feel free to contact us if you have any further questions or concerns.
            We will get back to you as soon as possible.
          </p>
          <form @submit="handleFormSubmit">
            <div class="form-group">
              <label for="fullname">Your Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                aria-describedby="fullname"
                v-model="formData.name"
              />
            </div>
            <div class="form-group">
              <label for="email">Your Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                v-model="formData.email"
              />
            </div>
            <div class="form-group">
              <label for="concernedtopic">Your Concerned Topic</label>
              <input
                type="text"
                class="form-control"
                id="concernedtopic"
                aria-describedby="concernedtopic"
                v-model="formData.topic"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="5" v-model="formData.message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="!valid || loading">
              <Spinner v-if="loading" />Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from "~/components/Spinner";
import Helper from "~/helpers/common";

export default {
  name: "HomeAbout",
  components: { Spinner },
  data() {
    return {
      isMobile: false,
      loading: false,
      formData: {
        name: null,
        email: null,
        topic: null,
        message: null
      }
    };
  },

  mounted() {
    if (process.client) {
      $(window).resize(() => {
        this.checkIfMobile();
      });
      this.checkIfMobile();
    }
  },

  methods: {
    handleFormSubmit(e) {
      e.preventDefault();
      this.loading = true;
      this.$axios
        .post("/mail", this.formData)
        .then(response => {
          this.$toast.show(response.data.message);
          this.loading = false;
          this.formData = {
            name: null,
            email: null,
            topic: null,
            message: null
          };
        })
        .catch(error => {
          Helper.displayError(this.$toast, error);
          this.loading = false;
        });
    },

    checkIfMobile() {
      this.isMobile = $(window).width() < 768;
    }
  },

  computed: {
    valid() {
      return (
        this.formData.name &&
        this.formData.name.length > 1 &&
        this.formData.email &&
        this.formData.email.length > 1 &&
        this.formData.topic &&
        this.formData.topic.length > 1
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_contact_info.scss";
</style>