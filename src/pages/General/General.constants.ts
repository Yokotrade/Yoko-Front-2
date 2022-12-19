import WalletIcon from "@mui/icons-material/Wallet";
import BotIcon from "icon/Bot";
import { CardContentProps } from "components/CardContent";

export const generalCards: CardContentProps[] = [
  {
    Icon: WalletIcon,
    title: "account_balance",
    description: "10.01 USDT",
    actions: [
      { title: "cardContent.replenish" },
      { title: "cardContent.withdraw" },
    ],
  },
  {
    Icon: BotIcon,
    title: "cardContent.robot_connected",
    actions: [
      { title: "cardContent.connect" },
      { title: "cardContent.tune" },
      { title: "cardContent.disable" },
    ],
  },
];
