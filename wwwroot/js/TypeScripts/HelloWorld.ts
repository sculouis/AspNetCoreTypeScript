
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        test: "Hello World"
    },
    getters: {
        doneTodos: function(state){
            return state.test
        }
    }
})

const test = new Vue(
    {
        el: "#home",
        store: store,
        data: {
            count: 100
        },
        computed: {
            test() {
                return this.$store.getters.doneTodos
            }

        },
        mounted() {
            console.log(this.$store.getters.doneTodos);
        }
    }
)




