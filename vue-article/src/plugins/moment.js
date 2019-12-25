import moment from "moment"
import Vue from "vue"
import VueMoment from "vue-moment"
import "moment/locale/zh-cn"

Vue.use(VueMoment, {
  moment
})

Vue.moment().locale()
