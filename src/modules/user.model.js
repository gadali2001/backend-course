import user from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const { name, age, gender, phone, country, city, region, network, goal, device, ask } = req.body;
        await user.create({ name, age, gender, phone, country, city, region, network, goal, device, ask });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}