// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------
interface GroupProperties {
  icon: string;
  sx?: object;
  color?: string;
  width?: number;
  height?: number;
}
export default function Iconify({ icon, sx, ...other }: GroupProperties) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
