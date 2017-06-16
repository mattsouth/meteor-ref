// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by my-test-package.js.
import { name as packageName } from "meteor/my-meteor-package";

import MyProj from "my-npm-project";

// Write your tests here!
// Here is an example.
Tinytest.add('my-meteor-package - example', function (test) {
  test.equal(packageName, "my-meteor-package", "default test");
  test.equal(MyProj.msg, "Hello World!", "new package test");
});
