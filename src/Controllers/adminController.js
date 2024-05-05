
const productModel = require("../Models/productModel")


exports.updateProduct = async function (req, res) {
    try {


        if (!req.body || Object.keys(req.body).length <= 0) return res.status(400).send({ status: false, message: "Give data to update.(Bad Request)" })

        const { whatUpdate, productId, ...resBody } = req.body


        if (!whatUpdate || !productId) return res.status(400).send({ status: false, message: "Give what update field please.(Bad Request)" })

        let updatedData = null;

        let findProductData = await productModel.findOne({ id: productId })

        if (!findProductData) return res.status(404).send({ status: false, message: "No data found with given productId." })


        if (whatUpdate === "price") {

            const { newPrice } = resBody
            findProductData.price = newPrice
        }

        else if (whatUpdate === "name") {

            const { newName } = resBody
            findProductData.name = newName
        }

        else {

        }



        // console.log(findOrderData)
        // console.log(updatedData)


        updatedData = await findProductData.save()

        res.status(200).send({ status: true, message: `${updatedData.name} data updated.`, data: updatedData, whatUpdate })


    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

