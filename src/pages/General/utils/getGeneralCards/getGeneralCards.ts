import WalletIcon from "@mui/icons-material/Wallet";
import BotIcon from "icon/Bot";
import { CardContentProps } from "components/CardContent";

export const getGeneralCards = (balance: number): CardContentProps[] => {
  return [
    {
      Icon: WalletIcon,
      title: "cardContent.account_balance",
      description: balance + " USDT",
      descriptionColor: balance > 0 ? "#05CD99" : "#E9002A",
      actions: [
        {
          title: "cardContent.replenish",
          disable: false,
          action: () => console.log("replenish"),
        },
        {
          title: "cardContent.withdraw",
          disable: false,
          action: () => console.log("withdraw"),
        },
      ],
    },
    {
      Icon: BotIcon,
      title: "cardContent.robot_connected",
      actions: [
        {
          title: "cardContent.connect",
          disable: false,
          action: () => console.log("connect"),
        },
        {
          title: "cardContent.tune",
          disable: false,
          action: () => console.log("tune"),
        },
        {
          title: "cardContent.disable",
          disable: true,
          action: () => console.log("disable"),
        },
      ],
    },
  ];
};
