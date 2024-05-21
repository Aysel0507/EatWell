import styles from "./index.module.scss";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <>
      <footer>
        <div id={styles.footer}>
          <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <h3>ABOUT US</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, similique, delectus blanditiis odit expedita amet. Sed
                  labore ipsum vel dolore, quis, culpa et magni autem sequi
                  facere eos tenetur, ex?
                </p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <h3>THE RESTAURANT</h3>
                <ul>
                  <a href=""><li>About Us</li></a>
                 <a href=""> <li>Chefs</li></a>
                  <a href=""><li>Events</li></a>
                  <a href=""><li>Contact</li></a>
                </ul>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <h3>USEFUL LINKS</h3>
                <ul>
                  <li>About Us</li>
                  <li>Chefs</li>
                  <li>Events</li>
                  <li>Contact</li>
                </ul>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <h3>USEFUL LINKS</h3>
                <ul>
                  <li>About Us</li>
                  <li>Chefs</li>
                  <li>Events</li>
                  <li>Contact</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
