import mongoose from 'mongoose';
export const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGO_DB)
        console.log("working DB")
    } catch (error) {
        console.log('error')
    }
}

