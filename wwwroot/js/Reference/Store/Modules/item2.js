var item2 = {
    namespaced: true,
    state: {
        test2: "Hello World"
    },
    getters: {
        doneTodos: function (state) {
            return state.test2;
        }
    },
    mutations: {
        setTest: function (state, payLoad) {
            state.test2 = payLoad;
        }
    },
    actions: {
        setTest: function (context, payLoad) {
            context.commit('setTest', payLoad);
        }
    }
};
//# sourceMappingURL=item2.js.map