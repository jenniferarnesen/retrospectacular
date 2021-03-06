'use strict';

var should = require('should'),
    request = require('supertest');


var checkHeaders = function(err, res, done) {
    should.not.exist(err);
    if (err) {
        throw err;
    }
    res.should.have.status(200);
    res.should.have.header(
            'Content-Type',
            'application/json; charset=utf-8'
            );

    res.should.have.header(
            'Access-Control-Allow-Methods',
            'GET,PUT,POST,DELETE,OPTIONS'
            );

    res.should.have.header(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-Type'
            );

    res.should.have.header(
            'Access-Control-Allow-Origin',
            '*'
            );

    done();
};

describe('Routing', function () {
    var url = 'http://localhost:3000';

    before(function(done) {
        done();
    });

    describe('Retrospectives GET all', function() {
        it('Should return correct headers', function(done) {
            request(url)
                .get('/retrospectives')
                .end(function(err, res) {
                    checkHeaders(err, res, done);
                });
        });
    });

    describe('Retrospectives GET', function() {
        it('Should return correct headers', function(done) {
            request(url)
                .get('/retrospectives/sdf23423sdf')
                .end(function(err, res) {
                    checkHeaders(err, res, done);
                });
        });
    });


    describe('Retrospectives POST', function() {
        it('Should return correct headers', function(done) {
            request(url)
                .post('/retrospectives')
                .end(function(err, res) {
                    checkHeaders(err, res, done);
                });
        });
    });

    describe('Tickets GET all', function() {
        it('Should return correct headers', function(done) {
            request(url)
                .get('/retrospectives/sfsdf234/tickets')
                .end(function(err, res) {
                    checkHeaders(err, res, done);
                });
        });
    });

    describe('Tickets GET', function() {
        it('Should return correct headers', function(done) {
            request(url)
                .get('/retrospectives/sdfsdr2334/tickets/dgdfgg')
                .end(function(err, res) {
                    checkHeaders(err, res, done);
                });
        });
    });
});


