export const state = () => ({
  errors: {
    Email: "",
    Password: "",
  },
  isUserLogged: false,
});

export const getters = {
  errors: (state) => state.errors,
  logged: (state) => state.isUserLogged,
};

export const mutations = {
  SET_isLogged(state, locale) {
    state.isUserLogged = locale;
  },
  resetErrors(state) {
    state.errors = {
      Email: "",
      Password: "",
    };
  },
  setEmailErrors(state, data) {
    state.errors.Email = data;
  },
  setPasswordErrors(state, data) {
    state.errors.Password = data;
  },
  logTrue(state, data) {
    state.isUserLogged = data;
  },
  loginUser(state, data) {
    let user = {
      id: data?.clientId,
      userid: data?.userid,
      token: data?.token,
      userName: data?.userName,
      name: data?.name,
      email: data?.email,
    };
    localStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("UserToken", data?.token);
    localStorage.setItem("name", data?.name);
    localStorage.setItem("UserTokenDate", new Date());
    state.isUserLogged = true;
  },
  logoutUser(state, data) {
    localStorage.removeItem("User");
    localStorage.removeItem("UserToken");
    localStorage.removeItem("UserTokenDate");
    localStorage.removeItem("name");
    state.isUserLogged = false;
    this.$router.push("/login");
  },
};

export const actions = {
  async userLogin({ state, commit }, form) {
    try {
      const response = await this.$axios.post(`/auth/login`, {
        email: form.email,
        password: form.password,
      });
      if (response.data.status) {
        const user = {
          ...response.data,
        };
        commit("loginUser", user);
      } 
    } catch (error) {
        console.log(error);

        commit("resetErrors");
      Object.values(error.response.data).forEach((e) => {
        if (e.password) commit("setPasswordErrors", e.password[0]);
        if (e.email) commit("setEmailErrors", e.email[0]);
      });
    }
  },

  // async companyRegister({ state, commit }, form) {
  //   console.log("company form:", form);

  //   try {
  //     const responseRegisterUser = await this.$axios.post(
  //       `/api/identity/user`,
  //       {
  //         firstName: form.nameEn,
  //         lastName: form.nameEn,
  //         userName: form.email,
  //         email: form.email,
  //         password: form.password,
  //         confirmPassword: form.confirmPassword,
  //         activateUser: true,
  //         autoConfirmEmail: true,
  //       }
  //     );

  //     if (!responseRegisterUser.data.succeeded) {
  //       // if (!true) {
  //       commit("resetErrors");
  //       commit("setResponseErrors", responseRegisterUser.data.messages);
  //     } else {
  //       // alert("user registered suscessfully");
  //       commit("resetErrors");
  //       const userId = responseRegisterUser.data.data;
  //       // const userId = "5b132e0c-9abd-48b9-8694-5d75744e3bf9";

  //       let companyType = [0];
  //       let companyStatus = "";
  //       if (form.companyType === "client") {
  //         (companyType = [1]), (companyStatus = "Accepted");
  //       }
  //       if (form.companyType === "delivery") {
  //         companyType = [2];
  //         companyStatus = "Pending";
  //       }
  //       if (form.companyType === "supplier") {
  //         companyType = [3];
  //         companyStatus = "Pending";
  //       }
  //       const responseRegisterCompany = await this.$axios.post(
  //         `/api/v1/Companies`,
  //         {
  //           nameAr: form.nameAr,
  //           nameEn: form.nameEn,
  //           email: form.email,
  //           responsiblePersonNameAr: form.responsiblePersonNameAr,
  //           countryId: form.countryId,
  //           princedomId: form.princedomId,
  //           legalForm: "holding",
  //           userId: userId,
  //           status: companyStatus,
  //           licenseImageUploadRequest: {
  //             fileName: form.commercialName,
  //             extension: form.commercialextension,
  //             uploadType: 1,
  //             data: form.commercialbase64string,
  //           },
  //           companyImageUploadRequest: {
  //             fileName: form.Logoname,
  //             extension: form.Logoextension,
  //             uploadType: 1,
  //             data: form.Logobase64string,
  //           },
  //           bannerImageUploadRequest: {
  //             fileName: form.bannerName,
  //             extension: form.bannerextension,
  //             uploadType: 0,
  //             data: form.bannerbase64string,
  //           },
  //           selectedActivityTypeIds: companyType,
  //         }
  //       );

  //       if (!responseRegisterCompany.data.succeeded) {
  //         commit("resetErrors");
  //         commit("setResponseErrors", responseRegisterCompany.data.messages);
  //       } else {
  //         // alert("waiting to accept from admin");
  //         commit("resetErrors");
  //         commit("setRegister", true);
  //       }
  //     }
  //   } catch (error) {
  //     Object.values(error?.response?.data)?.forEach((e) => {
  //       if ((typeof e === "object") & (Object?.keys(e).length > 0)) {
  //         commit("setResponseObjErrors", e);
  //       }
  //     });
  //   }
  // },
  // async customerRegister({ state, commit, dispatch }, form) {
  //   console.log("customer form:", form);
  //   try {
  //     const responseRegisterUser = await this.$axios.post(
  //       `http://admin.qaflah.net/api/identity/user`,
  //       {
  //         firstName: form.nameEn,
  //         lastName: form.nameEn,
  //         userName: form.email,
  //         email: form.email,
  //         password: form.password,
  //         confirmPassword: form.confirmPassword,
  //         activateUser: true,
  //         autoConfirmEmail: true,
  //         persomImageUploadRequest: {
  //           fileName: form.personalpictureName,
  //           extension: form.personalpictureextension,
  //           uploadType: 1,
  //           data: form.personalpicturebase64string,
  //         },
  //       }
  //     );

  //     if (!responseRegisterUser.data.succeeded) {
  //       // if (!true) {
  //       commit("resetErrors");
  //       commit("setResponseErrors", responseRegisterUser.data.messages);
  //     } else {
  //       // alert("user registered suscessfully");
  //       commit("resetErrors");
  //       const userId = responseRegisterUser.data.data;
  //       // const userId = "5b132e0c-9abd-48b9-8694-5d75744e3bf9";

  //       const responseRegisterCustomer = await this.$axios.post(
  //         `http://admin.qaflah.net/api/v1/Persons`,
  //         {
  //           fullNameAr: form.fullName,
  //           fullNameEn: form.fullName,
  //           email: form.email,
  //           phone: form.phone,
  //           address: form.address,
  //           countryId: form.countryId,
  //           princedomId: form.princedomId,
  //           nationalityId: form.nationalityId,
  //           sex: form.gender,
  //           userId: userId,
  //           status: "Accepted",
  //         }
  //       );

  //       if (!responseRegisterCustomer.data.succeeded) {
  //         commit("resetErrors");
  //         commit("setResponseErrors", responseRegisterCustomer.data.messages);
  //       } else {
  //         // alert("customer registered suscessfully");
  //         commit("resetErrors");
  //         const user = {
  //           email: form.email,
  //           password: form.password,
  //           isNew: true,
  //         };
  //         commit("setRegister", true);
  //         dispatch("userLogin", user);
  //       }
  //     }
  //   } catch (error) {
  //     Object.values(error?.response?.data)?.forEach((e) => {
  //       if ((typeof e === "object") & (Object?.keys(e).length > 0)) {
  //         commit("setResponseObjErrors", e);
  //       }
  //     });
  //   }
  // },
};
