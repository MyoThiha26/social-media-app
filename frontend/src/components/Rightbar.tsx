import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Typography,
  styled,
} from "@mui/material";
import Conversations from "./Conversations";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Rightbar = () => {
  return (
    <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed", width: "300px" }}>
        <Box sx={{ mb: 10 }}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup
            max={4}
            sx={{ justifyContent: "flex-end", padding: "5px" }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://shorturl.at/bqx39" />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://shorturl.at/BKSV5" />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://shorturl.at/HQ019" />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://shorturl.at/bqx39" />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="https://shorturl.at/bqx39" />
            </StyledBadge>
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={100}>
            Latest Conversations
          </Typography>
          <Conversations />
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
