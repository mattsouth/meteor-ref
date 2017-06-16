Most basic way of testing adding a local npm project to a local meteor package.

To use:

  your-machine$ git clone https://github.com/mattsouth/meteor-ref.git
  your-machine$ cd meteor-ref

check that the npm project is usable...

  your-machine$ node
  > console.log(require('./my-npm-project').msg)
  Hello World!

If you see the Hello World! then it works.  It's ctrl-D to escape the node REPL.  Now we need to install the node package to the meteor package.

  your-machine$ cd my-meteor-package
  your-machine$ meteor npm install '../my-npm-project'

This will show an error because you dont have a package.json file but it will install your package so that you can now run the tests..

  your-machine$ meteor test-packages ./

You should see green tests at http://localhost:3000
