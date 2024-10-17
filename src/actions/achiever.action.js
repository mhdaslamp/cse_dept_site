import Achiever from '../lib/models/Achiever';

export const createAchiever = async (achieverData) => {
    try {
        const newAchiever = new Achiever(achieverData);
        await newAchiever.save();
        return newAchiever;
    } catch (error) {
        throw new Error('Failed to create achiever: ' + error.message);
    }
};

export const getAchievers = async () => {
    try {
        const achievers = await Achiever.find();
        return achievers;
    } catch (error) {
        throw new Error('Failed to list achievers: ' + error.message);
    }
};

export const deleteAchiever = async (achieverId) => {
    try {
        const deletedAchiever = await Achiever.findByIdAndDelete(achieverId);
        if (!deletedAchiever) {
            throw new Error('Achiever not found');
        }
        return deletedAchiever;
    } catch (error) {
        throw new Error('Failed to delete achiever: ' + error.message);
    }
};

