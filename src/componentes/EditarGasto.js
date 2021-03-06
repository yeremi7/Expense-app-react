import React from 'react';
import {Header, Titulo} from './../elementos/Header';
import {Helmet} from 'react-helmet';
import BtnRegresar from './../elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import FormularioGasto from './FormularioGasto';
import {useParams} from 'react-router-dom';
import useObtenerGasto from './../hooks/useObtenerGasto';

const EditarGasto = () => {

    //Como se que se llama id?: porque ese es le nombre que le pusimos a la ruta de editarGasto el cual es este '/editar/:id
	const {id} = useParams();
    const [gasto] = useObtenerGasto(id);

	return (
		<>
			<Helmet>
				<title>Editar Gasto</title>
			</Helmet>

			<Header>
				<BtnRegresar ruta="/lista"/>
				<Titulo>Editar Gasto</Titulo>
			</Header>

			<FormularioGasto gasto={gasto} />

			<BarraTotalGastado />
		</>
	);
}
 
export default EditarGasto;