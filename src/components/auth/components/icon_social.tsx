import { Box } from "@mui/material";
import { Center } from "../../common/center";

type IconSocialProps = {
  src: string;
};
export function IconSocial({ src }: IconSocialProps) {
  return (
    <Center width="48px" height="48px" borderRadius="24px" border="0.4px solid" borderColor="#CACACC" p="10px">
      <Box component="img" src={src} alt="" />
    </Center>
  );
}
