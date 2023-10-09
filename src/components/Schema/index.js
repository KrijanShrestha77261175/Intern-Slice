import * as yup from "yup";

export const signInSchema = yup.object({
  // For email validation
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co|uk|io|info|...)$/,
      "Enter a valid email address"
    )
    .required(),

  // For password validation
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters long")
//     .matches(
//         /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
//       "Password must include at least one uppercase character, one lowercase letter one number and one special character"
//     )
//     .required(),

password: yup
    .string()
    .min(8)
    .max(32)
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, "Password must contain atleast a number")
    .matches(/[a-z]/, "Password must contain atleast a lowercase")
    .matches(/[A-Z]/, "Password must contain atleast an uppercase")
    .required(),

  // For confirm password validation
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Did not Match")
    .required(),

  // For username
  username: yup
    .string()
    .min(6, "Username must be at least 6 characters long")
    .required(),
});

export const loginSchema = yup.object({
  // For password validation
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters long")
//     .matches(
//         /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
//       "Password must include at least one uppercase character, one lowercase letter one number and one special character"
//     )
//     .required(),

password: yup
    .string()
    .min(8)
    .max(32)
    .min(8, "Password must have at least 8 characters")
    // .matches(/[0-9]/, "Password must contain atleast a number")
    .matches(/[a-z]/, "Password must contain atleast a lowercase")
    // .matches(/[A-Z]/, "Password must contain atleast an uppercase")
    .required(),

  // For username
  username: yup
    .string()
    .min(6, "Username must be at least 6 characters long")
    .required(),
});
