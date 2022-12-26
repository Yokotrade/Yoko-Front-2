import * as Styled from "./InputField.styled";

interface InputFieldProps {
  placeholder: string;
  handleChange: (evt: React.ChangeEvent<any>) => void;
  name: string;
  error?: string;
}

const InputField = ({
  placeholder,
  handleChange,
  name,
  error,
}: InputFieldProps) => {
  return (
    <>
      <Styled.InputField
        onChange={(evt) => handleChange(evt)}
        {...{ placeholder, name }}
      />
      {error && <Styled.InputErrorBlock>{error}</Styled.InputErrorBlock>}
    </>
  );
};

export default InputField;
