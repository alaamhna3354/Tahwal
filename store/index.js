 window.localStorage.setItem("page",1) ;
export const state = () => ({
    locales: [
      {
        name: "Arabic",
        value: "ar",
      },
      {
        name: "English",
        value: "en",
        
      },
    ],
    locale: { lang: "ar" },
    loading: true,
    invitations: [],
    categoriesInvit:[], 
    titles:[], 
    posts:{} ,
    blog:"" ,
    chairs:[],
    total_page: null,
    // social: [],
  });

  export const getters = {
    locales: (state) => state.locales,
    locale: (state) => state.locale,
    loading: (state) => state.loading,
    invitations: (state) => state.invitations,
    categoriesInvit: (state) => state.categoriesInvit,
    titles: (state) => state.titles,
    posts: (state) => state.posts,
    blog: (state) => state.blog,
    chairs: (state) => state.chairs,
    total_page: (state) => state.total_page,
  // menues: (state) => state.menues,
};
  export const mutations = {
    SET_total_page(state, total_page) {
      state.total_page = total_page;
    },
    // set Language
    SET_LANG(state, locale) {
      state.locale = locale;
      this.$cookies.set("lang", locale);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setInvitations(state, invitations) {
      state.invitations = invitations;
    },
    setCategoriesInvit(state, categoriesInvit) {
      state.categoriesInvit = categoriesInvit;
    },
    setTitles(state, titles) {
      state.titles = titles;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setblog(state, blog) {
      state.blog = blog;
    },
    setChairs(state, chairs) {
      state.chairs = chairs;
    },
    // setSocial(state, social) {
    //   state.social = social;
    // },
   
  };
  export const actions = {
    async fetchChairs({ state, commit },page) {
      try {
        const response = await this.$axios.get(`/chairs?page=${page}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('UserToken')
          }
        });
        commit("SET_total_page", response.data.meta.last_page);
        commit("setChairs", response.data.data);
      } catch (error) {
        console.error({ fetchChairs: error });
      }
    },
    async fetblog({ state, commit }) {
      try {
        const response = await this.$axios.get(`/boolean`);
        commit("setblog", response.data);
      } catch (error) {
        console.error({ fetchBlool: error });
      }
    },
    async fetchPosts({ state, commit }) {
      try {
        const response = await this.$axios.get(`http://localhost:3001/posts`);
        commit("setPosts", response.data);
      } catch (error) {
        console.error({ fetchPosts: error });
      }
    },
    async fetchinvitations({ state, commit },page) {
      try {
        const response = await this.$axios.get(`/invitations?page=${page}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('UserToken')
          }
        });
        commit("SET_total_page", response.data.meta.last_page);
        commit("setInvitations", response.data.data);
      } catch (error) {
        console.error({ fetchinvitations: error });
      }
    },
    async fetchCategoriesInvit({ state, commit },page) {
      try {
        const response = await this.$axios.get(`/categories?page=${page}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('UserToken')
          }
        });
        commit("SET_total_page", response.data.meta.last_page);
        commit("setCategoriesInvit", response.data.data);
      } catch (error) {
        console.error({ fetchinvitations: error });
      }
    },
    async fetchTitles({ state, commit },page) {
      try {
        const response = await this.$axios.get(`/titles?page=${page}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('UserToken')
          }
        });
        commit("SET_total_page", response.data.meta.last_page);
        commit("setTitles", response.data.data);
      } catch (error) {
        console.error({ fetchinvitations: error });
      }
    },
    
  };

