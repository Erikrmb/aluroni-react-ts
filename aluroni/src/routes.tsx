import Inicio from './pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Menu from 'components/menu';
import Footer from 'components/footer';
import { lazy, Suspense } from 'react';

const Cardapio = lazy(() => import('./pages/Cardapio'));
const PaginaPadrao = lazy(() => import('components/paginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter(){
	return(
		<main className='container'>
			<Router>
				<Menu />
				<Suspense fallback={<p>Carregando...</p>}>
					<Routes>
						<Route path='/' element={<PaginaPadrao/>}>
							<Route index element={<Inicio/>}></Route>
							<Route path='cardapio' element={<Cardapio></Cardapio>}/>
							<Route path='sobre' element={<Sobre></Sobre>}/>
						</Route>
						<Route path='prato/:id' element={<Prato/>}/>
						<Route path='*' element={<NotFound></NotFound>} />
					</Routes>
				</Suspense>
				<Footer/>
			</Router>
		</main>
	);
}