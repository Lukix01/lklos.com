module.exports = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Lukix01',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/lklos01',
        permanent: true
      }
    ]
  }
}