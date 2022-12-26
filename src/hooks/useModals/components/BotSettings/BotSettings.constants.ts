type FieldsType = "switch" | "multipleSelect" | "inputNumber" | "booleanSelect";

export type Fields = {
  name: string;
  label: string;
  type: FieldsType;
};

type FieldsValue = {
  title: string;
  fields: Fields[];
};

export const botFileds: FieldsValue[] = [
  {
    title: "Main settings",
    fields: [
      { name: "IsOnBot", label: "On/Off", type: "switch" },
      {
        name: "MainPermittedCoins",
        label: "Main permitted coins",
        type: "multipleSelect",
      },
      { name: "MinBnb", label: "Main BNB", type: "inputNumber" },
      { name: "MinBalance", label: "Main balance", type: "inputNumber" },
      { name: "UserOrder", label: "User order", type: "booleanSelect" },
      { name: "NewListing", label: "New listing", type: "booleanSelect" },
      { name: "MaxBuyListing", label: "Max buy listing", type: "inputNumber" },
      { name: "ListingOrders", label: "Listing orders", type: "inputNumber" },
      { name: "MaxTraidePairs", label: "Max trade pairs", type: "inputNumber" },
      {
        name: "AutoTraidePairs",
        label: "Auto trade pairs",
        type: "booleanSelect",
      },
      {
        name: "ProgressiveTraidePairs",
        label: "Progressive trade pairs",
        type: "booleanSelect",
      },
      {
        name: "TimeToCreateNewPos",
        label: "TIme to create new Pos",
        type: "inputNumber",
      },
      {
        name: "AmountNewPosition",
        label: "Amount new positin",
        type: "inputNumber",
      },
    ],
  },
  {
    title: "Trade settings",
    fields: [
      { name: "MinOrder", label: "Min order", type: "inputNumber" },
      { name: "MinPrice", label: "Min price", type: "inputNumber" },
      { name: "MinDaily", label: "Min daily %", type: "inputNumber" },
      { name: "Daily", label: "Dailly %", type: "inputNumber" },
      { name: "AutoDaily", label: "Auto dailly %", type: "booleanSelect" },
      { name: "OrderTimer", label: "Order timer", type: "inputNumber" },
      { name: "MinValue", label: "Min value", type: "inputNumber" },
      { name: "SellUp", label: "Sell up %", type: "inputNumber" },
      { name: "BuyDown", label: "Buy down %", type: "inputNumber" },
      { name: "Delta", label: "Delta %", type: "booleanSelect" },
      { name: "DeltaIncrease", label: "Delta increase %", type: "inputNumber" },
      { name: "DeltaDecrease", label: "Delta decrease %", type: "inputNumber" },
      { name: "DeltaDeep", label: "Delta deep", type: "booleanSelect" },
      { name: "NumAver", label: "Num aver", type: "booleanSelect" },
      { name: "StepAver", label: "Step aver %", type: "inputNumber" },
      { name: "MaxAver", label: "Max aver", type: "inputNumber" },
      { name: "QuantityAver", label: "Quantity", type: "inputNumber" },
    ],
  },
];
