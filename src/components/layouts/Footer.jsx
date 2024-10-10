import { CenterFocusStrong } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {
    return (
        <footer>
            <Box>
                <Typography sx={{
                    display: "flex",
                    paddingTop: "15px",
                    fontFamily: "Thasadith",
                    fontSize: "1.5em",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#A5A9B4",
                }}>
                    
                </Typography>
            </Box>
        </footer>
    )
}