import { Schema, model } from 'mongoose'
import { Event } from '../interfaces/event.interface'

const EventSchema = new Schema<Event>({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

EventSchema.methods.toJSON = function () {
    //Remove unwanted properties, for example:
    //passwords or sensitive data.
    const { __v, _id, ...rest } = this.toObject();
    rest.id = _id;
    return rest

}

export const EventModel = model<Event>('Event', EventSchema)