import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: "#app",
    data: {
      Rates: []
    },
    mounted () {
      this.getRates()
    },
    methods: {
      getRates: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(er => er.json())
        .then(r => this.Rates = r.rate)
      },
    },
  })
})