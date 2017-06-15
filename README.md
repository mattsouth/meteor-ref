Most basic way of testing adding a local npm project to a local meteor package.

To use:
``
your-machine$ git clone https://github.com/mattsouth/meteor-ref.git
your-machine$ cd meteor-ref
your-machine$ node
> console.log(require('./my-npm-project').msg)
Hello World!
ctrl-D
your-machine$ cd my-meteor-package
your-mcahine$ meteor test-packages ./
``
If you the inclusion is correct your should see green tests at http://localhost:3000
