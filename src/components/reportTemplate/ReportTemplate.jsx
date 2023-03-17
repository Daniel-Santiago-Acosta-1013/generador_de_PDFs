import React from 'react'
import './ReportTemplate.css'

const ReportTemplate = () => {
  return (
   <>
        <div className='head_container'>
            <h4>AUTORIZACION DE PAGO</h4>
            <h4>REFERENCIA NO.</h4>
        </div>

        <div className='table-container'>
            <img src="src/assets/Universidad_Central.png" alt="imagen de u central" width="300px"/>
            <table>
                <tr>
                    <td> 
                        <p>Documento No:</p> 
                        <p>10236598632</p>
                    </td>
                    <td>
                        <p>Nombre:</p> 
                        <p>Santiago Acosta</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Dia  Mes  Año:</p>
                        <p>Fecha: 12/5/2022</p>
                    </td>
                    <td>
                        <p>Ciclo:</p>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Programa</p>
                        <p>Cursos por modulo</p>
                    </td>
                </tr>
            </table>
        </div>

        <div className='head_container'>
            <h4>DETALLE DEL COBRO</h4>
        </div>

        <div className='table-container-2'>
            <table className='table-2'>
                <tr>
                    <th> cantidad </th>
                    <th> Descripcion </th>
                    <th> A cargo </th>
                    <th> A Favor </th>
                </tr>

                <tr className='content-table-2'>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                </tr>

            </table>
        </div>

        <div className='table-container-3'>
            <table className='table-3'>
                <tr>
                    <td> 
                        <p>PAGO ORDINARIO HASTA</p> 
                        <p>29/03/2023</p>
                    </td>
                    <td>
                        <p>VALOR A PAGAR</p> 
                        <p>$ 176,241.00 </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>PAGO EXTRAORDINARIO HASTA</p>
                        <p>29/03/2023</p>
                    </td>
                    <td>
                        <p>VALOR A PAGAR</p>
                        <p>$ 176,241.00 </p>
                    </td>
                </tr>
            </table>
        </div>
        
        <div className='table-container-4'>
            <table className='table-4'>
                <tr className='ht-no-border'>
                    <td className='td-no-border'> 
                        <p>CUENTA No. 1231321</p> 
                    </td>

                    <td className='td-no-border'>
                        <p>REFERENCIA:</p> 
                    </td>
                </tr>
                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>NOMBRE: Santiago Acosta</p> 
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PROGRAMA: </p>
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PAGO ORDIANARIO HASTA:</p>
                    </td>
                    <td className='td-no-border'>
                        <p>VALOR A PAGAR:</p>
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PAGO EXTRAORDINARIO HASTA:</p>
                    </td>
                    <td className='td-no-border'>
                        <p>VALOR A PAGAR:</p>
                    </td>
                </tr>

            </table>
        </div>
   </>
  )
}

export default ReportTemplate