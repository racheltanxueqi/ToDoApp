// Todo interface that extends the Document type provided by mongoose, using this to interact with MongoDB

import { Document } from "mongoose";

export interface ITodo extends Document {
    name: string
    description: string
    status: Boolean
}