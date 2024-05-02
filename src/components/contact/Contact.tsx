import { Box, Container, Typography } from "@mui/material";
import FormContact from "./FormContact";

export default function Contact() {
   return (
      <Box sx={{ py: `5rem` }}>
         <Container>
            {/* text & form */}
            <Box
               sx={{
                  maxWidth: `700px`,
                  mx: `auto`,
               }}
            >
               {/* text */}
               <Typography
                  variant="h1"
                  sx={{
                     fontSize: `54px`,
                     fontWeight: `600`,
                     textAlign: `center`,
                     mb: `50px`,
                  }}
               >
                  Lets{" "}
                  <Box
                     sx={{
                        color: `#f44336`,
                     }}
                     component={`span`}
                  >
                     connect.
                  </Box>
               </Typography>

               <FormContact />
            </Box>
         </Container>
      </Box>
   );
}
