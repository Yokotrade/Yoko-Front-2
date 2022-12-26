import * as Yup from "yup";

export interface AuthInitialValues {
  Login: string;
  Password: string;
}

export const initialValues: AuthInitialValues = {
  Login: "",
  Password: "",
};

export const validationSchema = Yup.object().shape({
  Login: Yup.string().required(),
  Password: Yup.string().required(),
});
