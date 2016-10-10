(function() {
  ulResults = document.createElement('ul');
  body.appendChild(ulResults);

  var results;

  this.assert = function assert(value, description) {
    var li = document.createElement('li');
    li.className = value ? 'pass' : 'fail';
    li.appendChild(document.createTextNode(description));
    results.appendChild(li);
    if (!value) {
      li.parentNode.parentNode.className = 'fail';
    }
    return li;
  };

  this.test = function test(testName, fn) {
    results = document.getElementById('results');
    results = assert(true, testName).appendChild(
        document.createElement('ul'));
    fn();
  };
})();

