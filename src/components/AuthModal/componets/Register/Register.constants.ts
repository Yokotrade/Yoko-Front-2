import * as Yup from 'yup'

export interface RegisterInitialValues {
  email: string;
  password: string;
  passwordRetry: string;
}

export const initialValues: RegisterInitialValues = {
  email: "",
  password: "",
  passwordRetry: "",
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    passwordRetry: Yup.string().required(),
})