import Campaign from "../models/Campaign.js";

/* READ */
export const getCampaigns = async (req, res) => {
    try {
        const campaign = await Campaign.find();
        res.status(200).json(campaign); //200 is for successful request
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}

export const getCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const campaign = await Campaign.findById(id);
        res.status(200).json(campaign);
    } catch (err) {
        res.status(404).json({ message : err.message });
    }
}