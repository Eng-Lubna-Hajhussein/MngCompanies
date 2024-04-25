import React from "react";
import CardDirHover from "./CardDirHover/CardDirHover";

/**
 * @param {{
 *   color: 'primary' | 'secondary',
 *   arrowColor: 'primary' | 'secondary',
 *   icon: string,
 *   label: string,
 *   style: 'card-dir-hover',
 * }} props
 */

function Card({
  icon,
  label,
  color = "primary",
  arrowColor = "secondary",
  style = "card-dir-hover",
}) {
  return (
    <React.Fragment>
      {style === "card-dir-hover" && (
        <CardDirHover
          icon={icon}
          label={label}
          color={color}
          arrowColor={arrowColor}
        />
      )}
    </React.Fragment>
  );
}

export default Card;
