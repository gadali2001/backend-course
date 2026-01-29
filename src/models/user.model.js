import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "الاسم مطلوب"],
            trim: true,
        },

        age: {
            type: Number,
            required: [true, "العمر مطلوب"],
        },

        gender: {
            type: String,
            required: [true, "الجنس مطلوب"],
        },

        phone: {
            type: String,
            required: [true, "رقم الهاتف مطلوب"],
        },

        country: {
            type: String,
            required: [true, "البلد مطلوب"],
            trim: true,
        },

        city: {
            type: String,
            required: [true, "المدينة مطلوبة"],
            trim: true,
        },

        region: {
            type: String, 
            default: "",
            trim: true,
        },

        network: {
            type: [String],
            required: [true, "نوع الشبكة مطلوب"],
        },

        device: {
            type: [String],
            required: [true, "نوع الجهاز مطلوب"],

        },

        goal: {
            type: String,
            required: [true, "الهدف مطلوب"],
            trim: true,
        },

        ask: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
