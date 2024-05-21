import { Button, Grid } from "@mui/material";
import { useGetOneQuery } from "../../services/ProductsApi";
import styles from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data } = useGetOneQuery(id);
  // console.log(data);
  const navigate=useNavigate()

  return (
    <>
      <div style={{ marginTop: "200px",display:'flex',justifyContent:'center',alignItems:'center' }}>
        {data && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={data.data._id}
            className={styles.card}
          >
            <img
              style={{ width: "300px", height: "200px" }}
              src={data.data.image}
              alt={data.data.title}
            />
            <h5>{data.data.price}</h5>
            <h3>{data.data.title}</h3>
            <p style={{ maxWidth: "300px" }}>{data.data.description}</p>
            <Button onClick={()=>{
              navigate(-1)
            }} variant="contained">Go Back</Button>
          </Grid>
        )}
      </div>
    </>
  );
};

export default Detail;
