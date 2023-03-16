import * as yup from 'yup'

export const schema = yup.object().shape({
    gitName: yup.string().required("Enter with your name"),
    email: yup.string().email().required("Enter with your email!"),
    password: yup.string().min(4).max(10).required("Enter with your password"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password dont match")
      .required("Confirm your password")
  });