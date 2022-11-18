import db from "../db/index.js";
const Merchant = db.Merchant;

const authController = {
  registerMerchant: async (req, res) => {

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "invalid fields",
        });
      }

      const { name, addres, password } = req.body;

      const findMerchantByNameOrAddres = await Merchant.findOne({
        where: {
          [Op.or]: { name: name, addres: addres },
        },
      });

      if (findMerchantByNameOrAddres) {
        return res.status(400).json({
          message: "name or addres has been used",
        });
      }
      const hashedPassword = bcrypt.hashSync(password, 5);
      const newMerchant = await Merchant.create({
        name: name,
        addres: addres,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "Merchant Registered",
        data: newMerchant,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  loginMerchant: async (req, res) => {
    try {
      const { NameOrAddres, password } = req.body;

      const findMerchantByNameOrAddres = await User.findOne({
        where: {
          [Op.or]: { name: NameOrAddres, addres: NameOrAddres },
        },
      });

      if (!findMerchantByNameOrAddres) {
        return res.status(400).json({
          message: "Merchant not found",
        });
      }

      const passwordValid = bcrypt.compareSync(
        password,
        findMerchantByNameOrAddres.password
      );

      if (!passwordValid) {
        return res.status(400).json({
          message: "Password invalid",
        });
      }

      delete findMerchantByNameOrAddres.dataValues.password;
      const token = signToken({
        id: findMerchantByNameOrAddres.id,
      });

      return res.status(201).json({
        message: "Login Merchant",
        data: findMerchantByNameOrAddres,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "server error",
      });
    }
  },
  refreshToken: async (req, res) => {
    try {
      const findMerchantById = await Merchant.findByPk(req.merchant.id);

      const renewedToken = signToken({
        id: req.user.id,
      });

      return res.status(200).json({
        message: "Renewed merchant login",
        data: findMerchantById,
        token: renewedToken,
      });
    } catch (error) {
      console.log(error);
      return (
        res.status(500),
        json({
          message: "Server Error",
        })
      );
    }
  },
  editProfile: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.user.id,
        },
      });
      return res.status(200).json({
        message: "profile updated",
      });
    } catch (error) {
      return res.status(500).json({
        message: "server error",
      });
    }
  },
};

export default authController;