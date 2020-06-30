const path = require('path')

module.exports = {
	plugins : [
		// Inserir o plugin de seo
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				name : `images`,
				path : path.join(__dirname, `src`, `pages`,`assets`, `image`)
			}
		},

		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
}