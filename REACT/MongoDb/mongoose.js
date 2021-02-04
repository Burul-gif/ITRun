const mongoose = require ('mongoose')

const url = 'mongodb+srv://Burul:alim2015aiima2018@cluster0.gtgxl.mongodb.net/example'

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('db is connected'))

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: String,
    surname: String,
    age: Number,
})

let userModel = mongoose.model('user', userSchema)

const foo = async () => {
    let user = await new userModel({
        id: '12uarioqicfaqw',
        name: 'Ivan',
        surname: 'Ivanov',
        age: 58
    }).save()
    console.log(user)
}
foo()

mongoose.model('users', userSchema)