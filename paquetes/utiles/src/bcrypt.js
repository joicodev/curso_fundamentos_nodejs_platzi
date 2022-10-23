const bcrypt = require('bcrypt');
const passwd = "1234segura!";
bcrypt.hash(passwd, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(passwd, hash, (err, res) => {
        console.log(res);
    });
});