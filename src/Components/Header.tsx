import React from 'react'
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const Header: React.FC = () => {
  return (
	<header className='header'>
		<div className='header__top top-header'>
			<div className="top-header__container">
				<div className='top-header__menu menu'>
				
				<nav className='menu__body'>
					<ul className='menu__list'>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Послуги</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Ціни</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Масажисти</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Відгуки</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Сертифікати</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Статті</a>
						</li>
						<li className='menu__item'>
							<a href="/#" className='menu__link'>Контакти</a>
						</li>
					</ul>
				</nav>
				
				
				{/* <MenuRoundedIcon style={{color: "white", fontSize: "2.7rem"}}/>
				<CloseSharpIcon  style={{color: "white", fontSize: "2.7rem"}}/> */}
				</div>
				<a href="/#" className='top-header__user'><FaceSharpIcon style={{color: "white", fontSize: "2.7rem"}}/> Кабінет</a>
			</div>
		</div>
		<div className='header__body body-header'></div>
		<div className='header__catalog catalog-header'></div>
	</header>
  )
}

export  {Header}