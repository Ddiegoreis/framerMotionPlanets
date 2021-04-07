import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Section = styled.section`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
    background: #131313;
    overflow: hidden;
`

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
	padding: 3rem calc((100vw - 1300px) / 2);

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

export const ColumnLeft = styled.div`
	display: flex;
	color: #fff;
	flex-direction: column;
	justify-content: center;
	padding: 5rem 2rem;

	h1 {
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}

	p {
		margin: 2rem 0;
		font-size: 4rem;
		line-height: 1.1;
	}
`

export const Button = styled(motion.button)`
	padding: 1rem 3rem;
	font-size: 1rem;
	border: 2px solid #fff;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
`

export const Image = styled(motion.img)`
	position: absolute;
	width: 100%;
	height: 100%;
	max-width: 250px;
	max-height: 250px;
`

export const ColumnRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	position: relative;

	${Image}:nth-child(1) {
		top: 10%;
		left: 10%;
	}

	${Image}:nth-child(2) {
		top: 0;
		left: 60%;
	}

	${Image}:nth-child(3) {
		top: 50%;
		left: 50%;
	}

	${Image}:nth-child(4) {
		bottom: 100px;
		left: 75px;
	}
`
