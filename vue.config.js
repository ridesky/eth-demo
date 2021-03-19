const IN_PRODUCTION = process.env.NODE_ENV === "production"

module.exports = {
	chainWebpack: (config) => {
		config.devtool(!IN_PRODUCTION ? "source-map" : false)
	},
}
