import moment from "moment";

export default ({ app, $axios }) => {
  // Every time the route changes (fired on initialization too)

  app.router.beforeResolve((to, from, next) => {
    if (
      localStorage.getItem("Refresh") &&
      localStorage.getItem("Refresh") == "true"
    ) {
      $axios
        .post(`https://admin.isystems.site/api/identity/token`, {
          email: "admin@example.com",
          password: "123Pa$$word!",
        })
        .then((response) => {
          $axios.setToken(response.data.data.token, "Bearer");
          localStorage.setItem("Token", response.data.data.token);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
          localStorage.setItem("tokenDate", new Date());

          if (localStorage.getItem("UserToken")) {
            localStorage.removeItem("User");
            localStorage.removeItem("UserToken");
            localStorage.removeItem("UserTokenDate");
            app.router.push("login");
          }
          localStorage.setItem("Refresh", false);

          next();
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      localStorage.getItem("UserToken") &&
      moment(new Date()).diff(moment(localStorage.getItem("UserTokenDate"))) <
        21600000
    ) {
      $axios.setToken(localStorage.getItem("UserToken"), "Bearer");
      next();
    } else next();
  });
};