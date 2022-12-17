import * as Yup from "yup";

export interface AuthInitialValues {
  email: string;
  password: string;
}

export const initialValues: AuthInitialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
