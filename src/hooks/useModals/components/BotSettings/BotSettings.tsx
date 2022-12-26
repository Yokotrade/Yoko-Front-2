import { useState } from "react";
import { useAppDispatch } from "store/hook";
import { deactiveModal } from "store/Modals";
import ModalPage from "ui/ModalPage";
import FieldsComponent from "./components/FieldsComponent";
import { botFileds } from "./BotSettings.constants";
import * as Styled from "./BotSettings.styled";

export const BotSettings = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const onClose = () => {
    setOpen((prev) => !prev);
    dispatch(deactiveModal());
  };
  return (
    <ModalPage {...{ open, onClose }}>
      <Styled.BotSettingsWrapper>
        <Styled.BotSettingsTitle>Торговые настройки</Styled.BotSettingsTitle>
        <Styled.SecretBlock>
          <Styled.SecretInput placeholder="API key" name="PublicKey" />
          <Styled.SecretInput placeholder="Secret key" name="SecretKey" />
        </Styled.SecretBlock>
        <Styled.CategoryBlock>
          {botFileds.map((category) => {
            return (
              <Styled.FiledsBlock>
                <Styled.FiledsTitle>{category.title}</Styled.FiledsTitle>
                {category.fields.map((field) => (
                  <FieldsComponent {...field} />
                ))}
              </Styled.FiledsBlock>
            );
          })}
        </Styled.CategoryBlock>
      </Styled.BotSettingsWrapper>
    </ModalPage>
  );
};
