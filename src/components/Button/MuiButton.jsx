import { Button, Stack, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

// props={
//     variant
//     color
//     size
//     disableElevation
//     IconButton
//     startIcon
//     endIcon
// }




export default function MuiButton() {

    
    return (
        
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Contained</Button>
                <Button variant="text">Text</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    primary
                </Button>
                <Button variant="contained" color="secondary">
                    secondary
                </Button>
                <Button variant="contained" color="success">
                    success
                </Button>
                <Button variant="contained" color="error">
                    error
                </Button>
                <Button variant="contained" color="info">
                    info
                </Button>
                <Button variant="contained" color="warning">
                    warning
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="text" color="primary">
                    primary
                </Button>
                <Button variant="text" color="secondary">
                    secondary
                </Button>
                <Button variant="text" color="success">
                    success
                </Button>
                <Button variant="text" color="error">
                    error
                </Button>
                <Button variant="text" color="info">
                    info
                </Button>
                <Button variant="text" color="warning">
                    warning
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" color="primary">
                    primary
                </Button>
                <Button variant="outlined" color="secondary">
                    secondary
                </Button>
                <Button variant="outlined" color="success">
                    success
                </Button>
                <Button variant="outlined" color="error">
                    error
                </Button>
                <Button variant="outlined" color="info">
                    info
                </Button>
                <Button variant="outlined" color="warning">
                    warning
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="large">
                    Contained
                </Button>
                <Button variant="contained" size="medium">
                    Contained
                </Button>
                <Button variant="contained" size="small">
                    Contained
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small" fullWidth={true}>
                    Contained
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small" endIcon={<ChevronRightIcon />}>
                    Contained
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<ChevronRightIcon />}
                >
                    Contained
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" disableElevation>
                    Disable elevation
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </Stack>
        </Stack>
    );
}
