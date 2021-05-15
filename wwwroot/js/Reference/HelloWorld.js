Vue.use(Vuex);
var store = new Vuex.Store({
    state: {
        test: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test;
        }
    }
});
var test = new Vue({
    el: "#home",
    store: store,
    data: {
        count: 100
    },
    computed: {
        test: function () {
            return this.$store.getters.doneTodos;
        }
    },
    mounted: function () {
        console.log(this.$store.getters.doneTodos);
    }
});
//# sourceMappingURL=HelloWorld.js.map