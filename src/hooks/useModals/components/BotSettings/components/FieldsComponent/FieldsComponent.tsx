import BooleanSelect from "../BooleanSelect";
import InputNumber from "../InputNumber";
import Switch from "../Switch";
import MultipleSelect from "../MultipleSelect";
import type { Fields } from "../../BotSettings.constants";

const FieldsComponent = (field: Fields) => {
  const { type } = field;
  switch (type) {
    case "booleanSelect":
      return <BooleanSelect {...field} />;
    case "switch":
      return <Switch {...field} />;
    case "multipleSelect":
      return <MultipleSelect {...field} />;
    case "inputNumber":
      return <InputNumber {...field} />;
    default:
      return null;
  }
};

export default FieldsComponent;
