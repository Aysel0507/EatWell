import {
  useDeleteOneMutation,
  useGetProductsByNameQuery,
  usePostOneMutation,
} from "../../services/ProductsApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import ProductsSchema from "../../validations/ProductsValidation";
import { Button, Popconfirm, Table } from "antd";
import styles from "./index.module.scss";

const AddPage = () => {
  const navigate = useNavigate();
  const { data: products, refetch } = useGetProductsByNameQuery();
  const [deleteOne] = useDeleteOneMutation();
  console.log(products);
  const [postOne] = usePostOneMutation();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      description: "",
    },
    onSubmit: async (values, actions) => {
      console.log(values);
      await postOne(values);
      navigate("/");
      refetch();
      actions.resetForm();
    },
    validationSchema: ProductsSchema,
  });

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <img src={image} alt="product image" height={100} width={120} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Actions",
      dataIndex: "delete",
      render: (data, record) => (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const confirm = async (id) => {
    await deleteOne(id);
    refetch();
  };

  return (
    <>
      <form
        className={styles.form}
        style={{ marginTop: "150px" }}
        onSubmit={formik.handleSubmit}
      >
        <input
          onBlur={formik.handleBlur}
          value={formik.values.image}
          onChange={formik.handleChange}
          name="image"
          type="url"
          placeholder="Enter image url"
        />
        {formik.errors.image && formik.touched.image && (
          <span style={{ color: "red" }}>{formik.errors.image}</span>
        )}

        <input
          onBlur={formik.handleBlur}
          value={formik.values.price}
          onChange={formik.handleChange}
          name="price"
          type="number"
          placeholder="Enter price"
        />
        {formik.errors.price && formik.touched.price && (
          <span style={{ color: "red" }}>{formik.errors.price}</span>
        )}

        <input
          onBlur={formik.handleBlur}
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          type="text"
          placeholder="Enter title"
        />
        {formik.errors.title && formik.touched.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}

        <input
          onBlur={formik.handleBlur}
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
          type="text"
          placeholder="Enter description"
        />

        {formik.errors.description && formik.touched.description && (
          <span style={{ color: "red" }}>{formik.errors.description}</span>
        )}
        <button type="submit">Add</button>
      </form>
      <hr />

      <Table columns={columns} dataSource={products?.data} />
    </>
  );
};

export default AddPage;
