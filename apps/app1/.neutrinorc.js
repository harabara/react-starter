const styles = require('neutrino-middleware-styles-loader')

module.exports = {
  use: [
    [
      'neutrino-preset-react',
      neutrino =>
        neutrino.config
          .entry('vendor')
          .add('react')
          .add('react-dom')
          .add('react-hot-loader')
    ],
    ['neutrino-middleware-styles-loader']
  ]
}
