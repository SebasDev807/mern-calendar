import express from 'express';
import { ObjectId } from 'mongoose';

export interface Request extends express.Request {
    uid?: ObjectId;
    name?: string;
}