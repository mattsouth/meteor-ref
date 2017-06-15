// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by my-test-package.js.
import { name as packageName } from "meteor/my-test-package";

// Write your tests here!
// Here is an example.
Tinytest.add('my-test-package - example', function (test) {
  test.equal(packageName, "my-test-package");
});
