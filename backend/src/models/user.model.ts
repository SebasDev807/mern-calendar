import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface';
import { hashSync } from 'bcryptjs';

const UserSchema = new Schema<User>({

    name: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        min: 8,
        required: true,
        trim: true
    }
})

UserSchema.pre('save', function (next) {
    this.password = hashSync(this.password, 10);
    next();
})

UserSchema.methods.toJSON = function () {
    //Remove unwanted properties, for example:
    //passwords or sensitive data.
    const { __v, _id, password, ...rest } = this.toObject()
    return rest
}

export const UserModel = model('User', UserSchema)