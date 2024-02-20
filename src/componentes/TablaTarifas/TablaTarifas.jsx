import React from 'react';
import './TablaTarifas.css';

const TablaTarifas = () => {
  return (
    <>

<div className="tabla-tarifas d-md-flex gap-5">
      <table className="table table-dark tabla-tarifas">
      <thead>
        <tr>
          <th>Cuadras</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10</td>
          <td>$1500</td>
        </tr>
        <tr>
          <td>20</td>
          <td>$1800</td>
        </tr>
        <tr>
          <td>25</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td>30</td>
          <td>$2200</td>
        </tr>
        <tr>
          <td>40</td>
          <td>$2600</td>
        </tr>
        <tr>
          <td>50</td>
          <td>$3000</td>
        </tr>
        <tr>
          <td>60</td>
          <td>$3400</td>
        </tr>
        <tr>
          <td>70</td>
          <td>$3700</td>
        </tr>
        <tr>
          <td>80</td>
          <td>$4000</td>
        </tr>
        <tr>
          <td>90</td>
          <td>$4500</td>
        </tr>
        <tr>
          <td>100</td>
          <td>$5000</td>
        </tr>
        <tr>
          <td>110</td>
          <td>$5500</td>
        </tr>
        <tr>
          <td>120</td>
          <td>$6000</td>
        </tr>
        <tr>
          <td>150</td>
          <td>$7000</td>
        </tr>
      </tbody>
    </table>


    <table className="table table-dark tabla-tarifas">
      <thead>
        <tr>
          <th>Localidad</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sierra chica</td>
          <td>$7000</td>
        </tr>
        <tr>
          <td>Colonia Hinojo</td>
          <td>$9000</td>
        </tr>
        <tr>
          <td>Hinojo</td>
          <td>$10000</td>
        </tr>
        <tr>
          <td>Sierras Bayas</td>
          <td>$10000</td>
        </tr>
        <tr>
          <td>Colonia San Miguel</td>
          <td>$16000</td>
        </tr>
        <tr>
          <td>Loma negra</td>
          <td>$8000</td>
        </tr>
        <tr>
          <td>Lamali</td>
          <td>$10000</td>
        </tr>
        <tr>
          <td>Azul</td>
          <td>$22000</td>
        </tr>
        <tr>
          <td>Bolivar</td>
          <td>$36000</td>
        </tr>
        <tr>
          <td>Lamadrid</td>
          <td>$34000</td>
        </tr>
        <tr>
          <td>Laprida</td>
          <td>$34000</td>
        </tr>
        <tr>
          <td>La Plata</td>
          <td>$90000</td>
        </tr>
        <tr>
          <td>Caba</td>
          <td>$99000</td>
        </tr>
        <tr>
          <td>Bahia Blanca</td>
          <td>$80000</td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
    
    
  );
};

export default TablaTarifas;

