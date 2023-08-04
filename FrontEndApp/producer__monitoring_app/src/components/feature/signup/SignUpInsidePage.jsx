import {
  FormControlLabel, Checkbox, Link, TextField, Button
} from "@mui/material";


export default function SignUpInsidePage() {
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (<>
    <div className="text-5xl font-extrabold mb-[4%]">
      Sign up
    </div>
    <div className="flex flex-col items-center w-full max-w-sm md:max-w-md xl:max-w-xl" >
      <div  noValidate onSubmit={handleSubmit}>
        <div>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </div>
        <div>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </div>
        <div>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
              <div>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </div>
          </div>
        </div>
  </>)}
