import express = require('express')

export default function (app: express.Application) {
	let { Router } = express
	let router = Router()
	
	router.get('/*', (req, res, next) => {
		res.render('index', {
			data: JSON.stringify({
				sampleStore: {
					title: 'Hello world!'
				}
			})
		})
	})

	app.use(router)
}
