import React from 'react';
import './TablaTarifas.css';

const TablaTarifas = () => {
  return (
    <>

<div className="tabla-tarifas">
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
    </div>
    </>
    
    
  );
};

export default TablaTarifas;

