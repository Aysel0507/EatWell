import styles from "./index.module.scss";
import {
  useDeleteOneMutation,
  useGetProductsByNameQuery,
} from "../../services/ProductsApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: products, refetch } = useGetProductsByNameQuery();
  const [deleteOne] = useDeleteOneMutation();
  console.log(products);
  return (
    <>
      <section id={styles.banner}>
        <div className="container">
          <div className={styles.banner}>
            <div className={styles.headingB}>
              <h3>Welcome To EatWell</h3>
              <p>Come and eat well with our delicious & healthy foods.</p>
              <button>Reservation</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "150px" }} id={styles.welcome}>
        <div className="container">
          <div className={styles.welcome}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={12}>
                <h2>Welcome</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <button>Learn More About Us</button>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={12}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section id={styles.products}>
        <div className="container">
          <div className={styles.products}>
            <div className={styles.headingP}>
              <h2>Our Offer This Summer</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {products &&
                products.data?.map((product) => {
                  return (
                    <Col
                      className="gutter-row"
                      span={6}
                      xs={24}
                      md={12}
                      lg={8}
                      key={product._id}
                    >
                      <img
                        style={{ width: "300px", height: "200px" }}
                        src={product.image}
                        alt={product.title}
                      />
                      <h5>{product.price}</h5>
                      <h3>{product.title}</h3>
                      <p style={{ maxWidth: "300px" }}>{product.description}</p>

                      <Button
                        variant="contained"
                        danger
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            await deleteOne(product._id);
                            refetch();
                          }
                        }}
                      >
                        Delete
                      </Button>
                      <Button>
                        <Link to={`/products/${product._id}`}>Detail</Link>
                      </Button>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "150px" }} id={styles.news}>
        <div className="container">
          <div className={styles.news}>
            <div className={styles.headingN}>
              <h2>News</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg"
                    title=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      We Have Dilecious Food
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg"
                    title=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Chef Special Menu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg"
                    title=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Merriage Celebrations
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Read More</Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section id={styles.grid}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.headingG}>
              <h3>GALLERY</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> */}
            <div className={styles.parent}>              
            {/* <Col className="gutter-row" span={6} xs={24} md={12} lg={8}> */}
              <div className={styles.div1}>
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.div2}>
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.div3}>
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.div4}>
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.div5}>
                {" "}
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg"
                  alt=""
                />
              </div>
              <div className={styles.div6}>
                {" "}
                <img
                  src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg"
                  alt=""
                />
              </div>
              {/* </Col> */}
            </div>
            {/* </Row> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
