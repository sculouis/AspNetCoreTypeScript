const mapGetters = Vuex.mapGetters;

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        item1
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
            ...mapGetters('item1',['doneTodos']),
            mycount() {
                return this.count;
            }
        },
        mounted() {
            console.log(this.$store.getters.doneTodos);
        }
    }
)




