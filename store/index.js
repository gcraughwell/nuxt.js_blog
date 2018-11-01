import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          // console.log(context);
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "title",
                previewText: "preview text 1",
                thumbnail:
                  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
              },
              {
                id: "2",
                title: "title",
                previewText: "preview text 2",
                thumbnail:
                  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43ef07555334a21b6c7dcecc929070ce&w=1000&q=80"
              }
            ]);
            resolve();
          }, 1500);
        })
          .then(data => {
            context.store.commit("setPosts", data.loadedPosts);
          })
          .catch(e => {
            context.error(e);
          });
      }
    },
    setPosts(vuexContext) {
      vuexContext.commit("setPosts", posts);
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
