import { Typography } from "@mui/material"

export default function MuiTypo() {
  return (
    <div>
  
  {/* all props of typography are
        -variant
        -align
        -gutterBottom 
        -noWrap
        -paragraph*/}

        <Typography variant="h1" align="center"  gutterBottom={true} >Hello</Typography>
        <Typography variant="h2" align="inherit">Hello</Typography>
        <Typography variant="h3" align="justify" >Hello</Typography>
        <Typography variant="h4" align="left" >Hello</Typography>
        <Typography variant="h5" align="right" >Hello</Typography>      
        <Typography variant="h6">Hello</Typography>      
        <Typography variant="subtitle1"       paragraph={true}      >Hello</Typography>
        <Typography variant="subtitle2">Hello</Typography>
        <Typography variant="string">Hello</Typography>
        <Typography variant="button">Hello</Typography>
        <Typography variant="caption" noWrap={true} >Hello</Typography>
    </div>
  )
}
