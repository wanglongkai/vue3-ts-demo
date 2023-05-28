export default [
  {
    url: "/api/user/getuserinfo",
    method: "get",
    response: () => {
      return {
        code: 200,
        msg: "success",
        "data|6": ["@integer(0, 1000)"],
      };
    },
  },
];