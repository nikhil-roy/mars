import React from 'react'
import text from './titles.json'
import './stylesheets/test2.scss'
import './stylesheets/test1.css'

export const test1 = (
	<h1 id='title'
		className='test1'>
		{text.test1}
	</h1>
)

export const test2 = (
	<h1 id='title'
		className='test2'>
		{text.test2}
	</h1>
)
