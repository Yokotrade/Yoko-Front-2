import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as Styled from "./CardContent.styled";

interface ActionsProps {
  title: string;
}

export interface CardContentProps {
  Icon: React.FC;
  title: string;
  description?: string;
  actions?: ActionsProps[];
}

const CardContent = ({
  Icon,
  title,
  description,
  actions,
}: CardContentProps) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
    setOpenMenu((prev) => !prev);
  };
  return (
    <Styled.CardContentWrapper>
      <Icon />
      <Styled.CardInformationBlock>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "12px",
            lineHeight: "12px",
            letterSpacing: "0.3px",
            color: "#181938",
          }}
        >
          {t(title)}
        </Typography>
        {description && (
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: "24px",
              lineHeight: "24px",
              letterSpacing: "0.3px",
              color: "#05CD99",
            }}
          >
            {t(description)}
          </Typography>
        )}
      </Styled.CardInformationBlock>
      <Styled.PopupMenuWrapper>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={openMenu ? "long-menu" : undefined}
          aria-expanded={openMenu ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleOpenMenu}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleOpenMenu}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: "20ch",
            },
          }}
        >
          {actions?.map(({ title }) => (
            <MenuItem key={title} onClick={handleOpenMenu}>
              {t(title)}
            </MenuItem>
          ))}
        </Menu>
      </Styled.PopupMenuWrapper>
    </Styled.CardContentWrapper>
  );
};

export default CardContent;
