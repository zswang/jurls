(function() {

    describe('Tests jurls', function() {
        it('typeof jurls', function(done) {
            assert.equal(typeof jurls, 'object');
            done();
        });
        it('parse("http://www.baidu.com/")', function(done) {
            var location = jurls.parse('http://www.baidu.com/');
            console.log(location);
        });
        it('parse("https://127.0.0.1:8080/path?search=param&key=value#hash")', function(done) {
            var location = jurls.parse('https://127.0.0.1:8080/path?search=param&key=value#hash');
            console.log(location);
        });
    });

}).call(this);
