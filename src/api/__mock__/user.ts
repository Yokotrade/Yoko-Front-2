export interface User {
  ID: string; // порядковый номер в БД
  UUID: string; // UIDv4 уникальный ид в БД
  Refcode: string; // Реферальный код пользователя, уникален
  CreatedAt: string; // дата регистрации
  UpdatedAt: string; // дата последнего изменения
  DeletedAt: string | null; // дата удаления
  Login: string; // email
  FirstName: string; // Отображаемое имя
  LastName: string;
  Groups: string | null; // разделение по группам доступа, октальная unix-like система
  Active: string;
  Confirmed: string; // подтверждён ли email
  ConfirmationCode: string | null;
  SecretKey: string | null; // до биржи
  PublicKey: string | null; // до биржи
  LoginName: string; //Юзернейм в телеграме
  SubscriptionType: string | null;
  SubscribtionEndTime: string | null;
  balance_income: number; // устаревший депозит
  balance_referal: number; // баланс реферального счёта
  balance_local: number; // локальный баланс пользователя, позволяющий торговать
  referal_code: string | null;
}
export const MockUser: User = {
  ID: "1",
  UUID: "asdad1", // UIDv4 уникальный ид в БД
  Refcode: "asdasd", // Реферальный код пользователя, уникален
  CreatedAt: "16.01.1987", // дата регистрации
  UpdatedAt: "16.01.1987", // дата последнего изменения
  DeletedAt: null, // дата удаления
  Login: "test!",
  FirstName: "VaSy", // Отображаемое имя
  LastName: "Васяк",
  Groups: null, // разделение по группам доступа, октальная unix-like система
  Active: "sd",
  Confirmed: "1", // подтверждён ли email
  ConfirmationCode: null,
  SecretKey: null, // до биржи
  PublicKey: null, // до биржи
  LoginName: "test! tel", //Юзернейм в телеграме
  SubscriptionType: null,
  SubscribtionEndTime: null,
  balance_income: 150, // устаревший депозит
  balance_referal: 121, // баланс реферального счёта
  balance_local: 150, // локальный баланс пользователя, позволяющий торговать
  referal_code: null,
};
