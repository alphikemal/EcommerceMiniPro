import db, { asyncQuery } from "../db/index.js";

const productController = {
    registerProduct: async (req, res) => {
        try {
          const registeredProduct = await asyncQuery(
            `INSERT INTO minipro.product VALUES (1,"${req.body.name}", "${req.body.price}", "${req.body.quantity}");`
          );
    
          return res.status(401).json({
            message: "product registered",
            data: registeredProduct,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            message: "server error",
          });
        }
      },
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;
            await db.Product.destroy({
              where: {
                id: id,
              },
            });
        
            return res.status(200).json({
              message: "Deleted product",
            });
          } catch (error) {
            console.log(error);
            return res.status(500).json({
              message: "Server Error",
            });
          }
        },
    updateProduct: async (req, res) => {
        try {
            const updatedProduct = await asyncQuery(
            `UPDATE FROM minipro.product VALUES (1,"${req.body.name}", "${req.body.price}", "${req.body.quantity}");`
            );
        
            return res.status(401).json({
                message: "product updated",
                data: updatedProduct,
            });
            } catch (error) {
              console.log(error);
              return res.status(500).json({
                message: "server error",
              });
            }
          },
    };

export default productController;
