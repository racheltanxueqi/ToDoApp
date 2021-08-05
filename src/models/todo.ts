// Define how a Todo model should look
// can use Todo model in other files to interact with the database

import { ITodo } from '../types/todo';
import { model, Schema } from 'mongoose';

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true}
)

export default model<ITodo>("Todo", todoSchema); // pass in ITodo as a type to the model before exporting it