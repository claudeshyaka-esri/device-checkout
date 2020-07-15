const prompt = require('prompt')
const Admin = require('../models/admin')

const properties = [
    {
        name: 'name',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        // TODO: Change the regex to include numbers
        name: 'username',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'email',
        validator: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        warning: 'Invalid email'
    },
];

prompt.start();

prompt.get(properties, (err, result) => {
    if (err){
        return onErr(err)
    }
    console.log('Command-line input recieved:')
    console.log('   Username: ' + result.username)
    console.log('   Name: ' + result.name)
    console.log('   Email: ' + result.email)

    createsupeuser(result.username, result.name, result.email)

})

const createsupeuser = (username, name, email) => {
    const admin = new Admin({
        username,
        name,
        email,
    })

    await admin.save()
}

const onErr = (err) => {
    console.log(err)
    return 1
}