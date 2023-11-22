import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Sidebar from "../Sidebar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControl from "@mui/material/FormControl";
import { Textarea } from "@mui/joy";

const AssestManagementForm = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
    <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
      <Typography variant="h6">
        Create a form for Assests Management :-
      </Typography>
      <Box>
        <Button variant="contained" onClick={handleClickOpen} sx={{ ml: 2 }}>
          Click
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Box>
            <FormControl>
              <DialogTitle id="responsive-dialog-title">
                {"Assests Management Form"}
              </DialogTitle>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                  width: 500,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                    Assets No.
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Assets No."
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  Asset name
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Asset name"
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  Description
                  </Typography>
                </Box>
                <Textarea minRows={2} />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  	Installation date
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Installation date"
                  variant="outlined"
                  size="small"
                  type="date"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  Asset Value
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Asset Value"
                  variant="outlined"
                  size="small"
                  type="number"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  	Location
                  </Typography>
                </Box>
                <Textarea minRows={2} />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  Vendor Name
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Vendor Name"
                  variant="outlined"
                  size="small"
                  type="text"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                    Vendor Contact No
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Vendor Contact No"
                  variant="outlined"
                  size="small"
                  type="number"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                    Vendor Email Id
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Vendor Email Id"
                  variant="outlined"
                  size="small"
                  type="email"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                    Warranty Expiry Date
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Warranty Expiry Date"
                  variant="outlined"
                  size="small"
                  type="date"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                  Condition
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="Description"
                  variant="outlined"
                  size="small"
                  type="text"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 7,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" component="p">
                    End of Life
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder="End of Life"
                  variant="outlined"
                  size="small"
                  type="text"
                  sx={{ width: "100%" }}
                />
              </Box>
              
              <DialogActions>
                {/* <Button autoFocus onClick={handleClose}>
                    Disagree
                  </Button> */}
                <Button onClick={handleClose} variant="contained">
                  Submit
                </Button>
              </DialogActions>
            </FormControl>
          </Box>
        </Dialog>
      </Box>
    </Box>
  </div>
  )
}

export default AssestManagementForm