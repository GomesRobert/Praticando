import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Grid, Paper, Typography, Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implementar lógica de login aqui
        console.log('Login:', login);
        console.log('Password:', password);
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['Menus','left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

            <Grid container spacing={2} justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} style={{ padding: '2em', marginTop: '2em' }}>
                        <Typography variant="h5" gutterBottom>
                            Login
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="login_nome">Login</InputLabel>
                            <Input
                                id="login_nome"
                                aria-describedby="login_nome_helper_text"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />
                            <FormHelperText id="login_nome_helper_text">Digite seu login.</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="login_password">Senha</InputLabel>
                            <Input
                                id="login_password"
                                type="password"
                                aria-describedby="login_password_helper_text"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <FormHelperText id="login_password_helper_text">Digite sua senha.</FormHelperText>
                        </FormControl>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleLogin}
                            style={{ marginTop: '1em' }}
                        >
                            Entrar
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
