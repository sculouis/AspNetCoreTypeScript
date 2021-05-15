var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mapGetters = Vuex.mapGetters;
var mapActions = Vuex.mapActions;
Vue.use(Vuex);
var store = new Vuex.Store({
    modules: {
        item1: item1
    }
});
var test = new Vue({
    el: "#home",
    store: store,
    data: {
        count: 100
    },
    methods: __assign(__assign({}, mapActions('item1', ['setTest'])), { clickMe: function () {
            this.setTest("Change Me");
        } }),
    computed: __assign(__assign({}, mapGetters('item1', ['doneTodos'])), { mycount: function () {
            return this.count;
        } }),
    mounted: function () {
        console.log(this.$store.getters.doneTodos);
    }
});
//# sourceMappingURL=HelloWorld.js.map