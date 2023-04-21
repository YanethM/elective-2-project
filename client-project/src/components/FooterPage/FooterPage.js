import React from "react";
import { Row, Col } from "antd";
import "./FooterPage.scss";

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={8}>
            <h4>Información de contacto</h4>
            <p>Universidad- Empresa</p>
            <p>Manizales</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Enlaces útiles</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <a href="#">Política de privacidad</a>{" "}
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Suscríbete a nuestro boletín</h4>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                © {new Date().getFullYear()} SENNOVALAB. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
