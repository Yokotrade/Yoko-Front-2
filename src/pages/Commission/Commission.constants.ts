import WalletIcon from "@mui/icons-material/Wallet";
import { CardContentProps } from "components/CardContent";

export const commissionCards: CardContentProps[] = [
  {
    Icon: WalletIcon,
    title: "cardContent.balance",
    description: "10.01 USDT",
    actions: [{ title: "cardContent.replenish" }],
  },
];
