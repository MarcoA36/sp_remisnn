import React from "react";
import "./Home.css";
import Banner from "../../componentes/Banner/Banner";
import CardQuienesSomos from "../../componentes/CardQuienesSomos/CardQuienesSomos";
import CardUnirse2 from "../../componentes/CardUnirse/CardUnirse2";
import FormContacto from "../../componentes/FormContacto/FormContacto";

const Home = () => {
  return (
    <div>
      <section className="seccion_banner seccion">
        <Banner />
      </section>

      {/* <Novedades/> */}
      <section className="seccion_quienes-somos seccion">
        <CardQuienesSomos />
      </section>
      <section className="seccion_unirse seccion">
        <CardUnirse2 />
      </section>

      <section className="seccion_contacto seccion">
        {/* <h3 className="titulo_seccion">Dejenos su consulta!</h3> */}
        <FormContacto />
      </section>
    </div>
  );
};

export default Home;
