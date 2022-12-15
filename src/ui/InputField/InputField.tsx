import * as Styled from "./InputField.styled";

interface InputFieldProps {
  placeholder: string;
  handleChange: (evt: React.ChangeEvent<any>) => void;
  name: string;
}

const InputField = ({ placeholder, handleChange, name }: InputFieldProps) => {
  return (
    <Styled.InputField
      onChange={(evt) => handleChange(evt)}
      {...{ placeholder, name }}
    />
  );
};

export default InputField;
