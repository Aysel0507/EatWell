import * as Yup from "yup";

let ProductsSchema = Yup.object().shape({
  image: Yup.string().url().required(),
  price: Yup.number().required().positive().integer(),
  title:Yup.string().min(3).required(),
  description:Yup.string().required()
});

export default ProductsSchema;
