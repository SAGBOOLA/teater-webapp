import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
                Teater I Huskvarna
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const SignInBox = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(/welcome_page.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square color={'#b90e0a'}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#b90e0a' }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Logga In
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-postadress"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                color='error'
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Lösenord"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color='error'
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="error" />}
                                label="Kom ihåg mig"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color='error'
                            >
                                Logga In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" color={'error'}>
                                    Glömt ditt lösenord?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" color={'error'}>
                                        {"Har inget konto? Bli Medlem"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default SignInBox;