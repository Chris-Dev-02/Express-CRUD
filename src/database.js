import mongoose from 'mongoose'

export const connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/basic_crud')
    .then(db => console.log('Database was connected successfully'))
    .catch(err => console.log(err))
}