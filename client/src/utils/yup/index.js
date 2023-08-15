import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("введите корректный email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Не менее 8 символов")
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        "'Пароль должен содержать спецсимвол, один заглавный символ, одну цифру"
      ),
  })
  .required();

export const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("введите корректный email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(8, "Не менее 8 символов")
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
        "'Пароль должен содержать спецсимвол, один заглавный символ, одну цифру"
      ),
    userName: yup.string().required("Обязательное поле"),
    firstName: yup.string().required("Обязательное поле"),
  })
  .required();
