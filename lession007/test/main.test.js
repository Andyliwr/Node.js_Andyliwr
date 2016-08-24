var main = require('../main');
var should = require('should');

describe('main.test.js', function(){
    //当n=0
    it('should equal 0 when n === 0', function(){
        main.fibonacci(0).should.equal(0);
    });

    //当n=1
    it('should equal 1 whenn n === 1', function(){
        main.fibonacci(1).should.equal(1);
    });

    it('should equal 55 when n === 10', function(){
        main.fibonacci(10).should.equal(55);
    })

    //当n>10
    it('should throw when n > 10', function(){
        (function(){
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    })

    //当n<0
    it('should throw when n < 0', function(){
        (function(){
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    })

    //当n不是数字
    it('should throw when n isnt Number', function(){
        (function(){
            main.fibonacci('我爱你');
        }).should.throw('n should be a number');
    })
});