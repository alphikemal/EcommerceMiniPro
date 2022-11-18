import db, { asyncQuery } from "../db/index.js";

const merchantController = {
  registerMerchant: async (req, res) => {
    try {
      const registeredMerchant = await asyncQuery(
        `INSERT INTO minipro.merchant VALUES (1,"${req.body.name}", "${req.body.addres}", "${req.body.password}");`
      );

      return res.status(401).json({
        message: "merchant registered",
        data: registeredMerchant,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  DeleteMerchant: async (req, res) => {
    try {
      const { id } = req.params;
      await db.Merchant.destroy({
        where: {
          id: id,
        },
      });
  
      return res.status(200).json({
        message: "Deleted merchant",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Server Error",
      });
    }
  },
};

export default merchantController;
