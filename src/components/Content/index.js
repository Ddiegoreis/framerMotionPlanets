import React from 'react'
import { motion } from 'framer-motion'

import {
	Section,
	Container,
	ColumnLeft,
	Button,
	ColumnRight,
	Image,
} from './style'

import Planeta1 from '../../images/planet.svg'
import Planeta2 from '../../images/planet-2.svg'
import Planeta3 from '../../images/planet-3.svg'
import Planeta4 from '../../images/planet-4.svg'

function Content() {
	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	}

	return (
		<Section>
			<Container>
				<ColumnLeft>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						Bem vindo ao espaço
					</motion.h1>
					<motion.p
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}>
						Jornada para o desconhecido
					</motion.p>
					<Button
						whileHover={{ scale: 1.05 }}
						whileTap={{
							scale: 0.95,
							backgroundColor: '#fff',
							color: '#000',
							border: 'none',
						}}
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 1.5,
							},
						}}>
						Iniciar
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<Image
						src={Planeta1}
						alt='planet'
						whileHover={{ scale: 1.05 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						initial={{
							opacity: 0,
							y: -100,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.95,
							},
						}}
					/>
					<Image
						src={Planeta2}
						alt='planet'
						whileHover={{ scale: 1.05 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						initial={{
							opacity: 0,
                            y: -90,
                            x: -30,
						}}
						animate={{
							opacity: 1,
                            y: 0,
                            x: 0,
							transition: {
								duration: 0.95,
							},
						}}
					/>
					<Image
						src={Planeta3}
						alt='planet'
						whileHover={{ scale: 1.05 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						initial={{
							opacity: 0,
                            x: -25,
						}}
						animate={{
							opacity: 1,
                            x: 0,
							transition: {
								duration: 0.95,
							},
						}}
					/>
					<Image
						src={Planeta4}
						alt='planet'
						whileHover={{ scale: 1.05 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
						initial={{
							opacity: 0,
                            y: -70,
                            x: -70,
						}}
						animate={{
							opacity: 1,
                            y: 0,
                            x: 0,
							transition: {
								duration: 0.95,
							},
						}}
					/>
				</ColumnRight>
			</Container>
		</Section>
	)
}

export default Content
