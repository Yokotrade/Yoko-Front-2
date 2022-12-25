import * as Styled from "./Tooltip.styled";

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  title: string;
  valuePrifix: string;
}
const Tooltip = ({
  active,
  payload,
  label,
  title,
  valuePrifix,
}: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <Styled.TooltipWrapper>
        <Styled.TooltipTitle>{title}</Styled.TooltipTitle>
        <Styled.TooltipValue>{`${payload[0].value} ${valuePrifix}`}</Styled.TooltipValue>
        <Styled.TooltipLabel>{label}</Styled.TooltipLabel>
      </Styled.TooltipWrapper>
    );
  }

  return null;
};

export default Tooltip;
