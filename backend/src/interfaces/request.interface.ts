import express from 'express';
import { User } from './user.interface';

export interface Request extends express.Request {
    user?: User
}