import { ObjectId } from 'mongoose';

export interface User {
    uid: ObjectId;
    name: string;
    email: string;
    password: string;
}

// export interface UserPayload
//     extends Pick<User, 'name' | 'uid'>,
//     JwtPayload { }