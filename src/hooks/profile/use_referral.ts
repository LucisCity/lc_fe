// import { gql, useMutation } from "@apollo/client";
// import Router from "next/router";
// import { handleGraphqlErrors } from "../../utils/apolo.util";
//
// const LOGIN_MUT = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         id
//         email
//         ref_code
//         profile {
//           user_id
//           avatar
//           display_name
//         }
//       }
//     }
//   }
// `;
//
// export default function useReferral() {
//   const [login, { loading }] = useMutation(LOGIN_MUT, {
//     onCompleted: (res) => {
//       UserStore.saveLoginInfo(res.login.token, res.login.user);
//       Router.push("/");
//     },
//     onError: (e) => {
//       const errors = handleGraphqlErrors(e);
//       errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
//     },
//   });
//
//   return {};
// }
