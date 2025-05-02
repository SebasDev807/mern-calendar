import { ObjectId } from "mongoose";

export interface Event {
    title: string;
    notes: string;
    start: Date;
    end: Date;
    user: ObjectId
}