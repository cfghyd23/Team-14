import Admin from "../models/Admin.js";
import Campaign from "../models/Campaign.js";
/* READ */

export const createCampaign = async (req, res) => {
    const campaign = req.body;
    const newCampaign = new Campaign(campaign);
    try {
        await newCampaign.save();
        res.status(201).json(newCampaign); //201 is for successful creation
    } catch (err) {
        res.status(409).json({ message : err.message });
    }
}

