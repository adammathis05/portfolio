import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import PDF from "../../assets/resume.pdf";

const socialIcons = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    href: "https://github.com/adammathis05",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adammathis05/",
  },
  {
    icon: <SendIcon />,
    label: "Email Me",
    href: `mailto:adammathis.dev@gmail.com`,
  },
]; 

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Socials({
  styles,
  placement,
  color,
  background,
  isMobile,
}) {
  
  const handleDownload = () => {
    window.open(PDF, "_blank");
  };
  return (
    <Box
      className={isMobile === undefined ? "" : "slide-left"}
      style={styles}
      sx={{ marginLeft: "20px" }}
    >
      {socialIcons.map(({ icon, label, href }, index) => (
        <StyledTooltip key={index} title={label} placement={placement} arrow>
          <Fab
            color={"black"}
            aria-label={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            sx={{
              marginTop: "15px",
              background: { background },
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="metallic-button"
          >
            {icon}
          </Fab>
        </StyledTooltip>
      ))}
      <StyledTooltip title={"Download My Resume"} placement={placement} arrow>
        <Fab
          color={"black"}
          aria-label={"My Resume"}
          onClick={handleDownload}
          sx={{
            marginTop: "15px",
            background: { background },
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
          className="metallic-button"
        >
          <SaveAltIcon />
        </Fab>
      </StyledTooltip>
    </Box>
  );
}
