// mui
import {
  Checkbox, TextField, Button, FormControlLabel, Link, Grid, Avatar,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";


export default function LoginForPage() {
  return (
    <div className="flex flex-col items-center  max-w-sm md:max-w-md xl:max-w-xl w-full"> 
      <TextField label="Email Address" name="email" autoComplete="email" required fullWidth autoFocus/>
      <TextField label="Password" name="password" type="password" autoComplete="current-password" required fullWidth
        sx={{ mb: 1, mt: 2 }} />
      <div className=" self-stretch">
        <FormControlLabel
          control={<Checkbox value="Remember" color="primary" />} label="remember me" />
      </div>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb:4}}>Sign in</Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link >Sign Up </Link>
    </div>
  )
}