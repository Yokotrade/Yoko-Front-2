import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import type { Fields } from "../../BotSettings.constants";
import * as Styled from "./BooleanSelect.styled";

const BooleanSelect = ({ name, label }: Fields) => {
  return (
    <Styled.BooleanSelectWrapper>
      <Styled.BooleanSelectLabel htmlFor="uncontrolled-native">
        {label}
      </Styled.BooleanSelectLabel>
      <NativeSelect
        defaultValue={false}
        inputProps={{
          name,
        }}
      >
        <option value={"true"}>Yes</option>
        <option value={"false"}>No</option>
      </NativeSelect>
    </Styled.BooleanSelectWrapper>
  );
};

export default BooleanSelect;
