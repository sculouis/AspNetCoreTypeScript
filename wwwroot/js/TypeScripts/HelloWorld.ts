const mapGetters = Vuex.mapGetters;
const mapActions = Vuex.mapActions;

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
        methods: {
            ...mapActions('item1', [ActionTypes.SET_TEST]),
            clickMe() {
                this[ActionTypes.SET_TEST]("Change Me");
            }
           
        },
        computed: {
            ...mapGetters('item1',['doneTodos']),
            mycount() {
                return this.count;
            }
        },
        mounted() {
            console.log(this.doneTodos);
        }
    }
)




