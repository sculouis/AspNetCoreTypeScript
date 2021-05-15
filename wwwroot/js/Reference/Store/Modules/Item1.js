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
    actions: {
        setTest: function (context, payLoad) {
            context.commit('setTest', payLoad);
        }
    }
};
//# sourceMappingURL=Item1.js.map