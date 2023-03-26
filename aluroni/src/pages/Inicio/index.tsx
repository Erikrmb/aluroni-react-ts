import cardapio from 'data/cardapio.json';
import style from './Inicio.module.scss';
import styleTema from 'styles/Tema.module.scss';
import nossaCasaImagem from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio(){
	const navigate = useNavigate();
	let pratosRecomendados = [...cardapio];
	pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
	function redirecionarParaDetalhes(prato: Prato){
		navigate(`/prato/${prato.id}`, {state: {prato}, replace: true} );
	}
	return(
		<>
			<h3 className={styleTema.titulo}>
				Recomendaçoes
			</h3>
			<div className={style.recomendados}>
				{pratosRecomendados.map((item) => (
					<div key={item.id} className={style.recomendado}>
						<div className={style.recomendado__imagem}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={style.recomendado__botao}
							onClick={() => redirecionarParaDetalhes(item)}>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<h3 className={styleTema.titulo}> Nossa Casa </h3>
			<div className={style.nossaCasa}>
				<img src={nossaCasaImagem} alt=""></img>
				<div className={style.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br/><br/> Vila Mariana - SP
				</div>
			</div>
		</>
	);
}