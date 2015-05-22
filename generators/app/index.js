'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the extraordinary ' + chalk.red('Html5slide') + ' generator!'
    ));

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someOption',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someOption;

    //   done();
    // }.bind(this));
    done();
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('html5slide-framework'),
        this.destinationPath()
      )
    },

    projectfiles: function () {
    }
  },

  install: function () {
    this.installDependencies();
  }
});
