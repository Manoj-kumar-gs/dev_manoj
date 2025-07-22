import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
    client: string;
    content: string;
    createdAt: Date;
}

const messageSchema = new Schema<Message>({
    client:{
        type: String,
        required: true,
        default:"client"
    },
    content: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document {
    client: string;
    email: string;
    messages: Message[]
}

const UserSchema = new Schema<User>({
    client: {
        type: String,
        required: [true, "client is requred"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "email is requred"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please enter a valid email"],
        unique: true,
    },
    messages: [messageSchema]
})

const UserModel = mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default UserModel;   