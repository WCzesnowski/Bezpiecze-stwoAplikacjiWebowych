const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Konfiguracja użytkownika i hasła
const users = { 'admin': 'password' };

app.use(basicAuth({
    users: users,
    challenge: true,
    unauthorizedResponse: 'Unauthorized'
}));

app.get('/secure-data', (req, res) => {
    res.json({ message: `Hello, ${req.auth.user}!` });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});