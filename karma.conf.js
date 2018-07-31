// karma.conf.js
const webpackConfig = require('./config/webpack/test.js')
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
    files: [
      'test/javascript/*.spec.js',
      'test/javascript/**/*.spec.js'
    ],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {
      'test/javascript/*.spec.js': ['webpack', 'sourcemap'],
      'test/javascript/**/*.spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
}
