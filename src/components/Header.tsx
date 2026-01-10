import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">home</Button>
        <Button color="inherit" component={Link} to="/saved">saved</Button>
      </Toolbar>
    </AppBar>
  );
}
