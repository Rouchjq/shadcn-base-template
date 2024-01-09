import { NextPage } from 'next';
import { Button } from '@/components/atoms/button';

import classes from '../styles/homepage.module.css';
import { Row } from '@/components/atoms/row';
import { Col } from '@/components/atoms/col';

const HomePage: NextPage = () => {
	return (
		<Row justifyContent='center' className='bg-red-500'>
			<Col xs={6} className='bg-green-400 flex flex-col'>
				<p className='  text-[32px]  sm:text-[12px] text-secondary '>
					Este es un párrafo en una columna que ocupa la mitad del ancho de su
					contenedor.
				</p>
				<div className='bg-blue-500 w-40 h-96 p-5'>
					<Button colorLoading='destructive' variant='secondary' loading={true}>
						ola
					</Button>
				</div>
			</Col>
			<Col xs={6} className='bg-yellow-500  flex flex-col justify-center '>
				<p>
					Este es otro párrafo en una columna que también ocupa la mitad del ancho de
					su contenedor.
				</p>

				<div className='bg-pink-500 h-max '> adios</div>
			</Col>
		</Row>
	);
};

export default HomePage;
