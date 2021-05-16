var _a;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SET_TEST"] = "SET_TEST";
})(ActionTypes || (ActionTypes = {}));
var item1 = {
    namespaced: true,
    state: {
        test: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test;
        }
    },
    mutations: {
        setTest: function (state, payLoad) {
            state.test = payLoad;
        }
    },
    actions: (_a = {},
        _a[ActionTypes.SET_TEST] = function (context, payLoad) {
            context.commit('setTest', payLoad);
        },
        _a)
};
//# sourceMappingURL=Item1.js.map