import './TablaTarifas.css'

const TablaEspera = () => {
  return (
    <div className="tabla-tarifas tarifa-espera mt-4">
    <table className="table table-dark tabla-tarifas">
      <thead>
        <tr>
          <th>Espera</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>5 min</td>
          <td>$250</td>
        </tr>
        <tr>
          <td>10 min</td>
          <td>$500</td>
        </tr>
        <tr>
          <td>30 min</td>
          <td>$2000</td>
        </tr>
        <tr>
          <td>1 hora</td>
          <td>$5000</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default TablaEspera