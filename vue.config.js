module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '/calc/'
      : '/',
      // where to output built files
    outputDir: 'docs',
}