import React from 'react'
import { render } from 'react-dom'
import { test1, test2 } from './lib'

render(
	<div>
		{test1}
		{test2}
	</div>,
	document.getElementById('react-container')
)
