import React from 'react'
import './style.css'
import { useState } from 'react'


export function SecaoComentario(props) {
	const [comentario, setComentario]=useState("")

	const handleComentario=(event)=>(
		setComentario(event.target.value)
	)
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={comentario}
				onChange={handleComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}