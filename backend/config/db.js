import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sttallev99:user123@cluster0.fjl8q.mongodb.net/TrendyStore?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('DB Connected'))
}