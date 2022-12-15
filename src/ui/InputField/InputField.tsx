import * as Styled from "./InputField.styled";

interface InputFieldProps {
  placeholder: string;
}


const InputField = (props: InputFieldProps) => {
  return (
      <Styled.InputField {...props} />
  );
};

export default InputField;
