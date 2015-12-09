'use strict';

var Agenda = require('agenda');
var agenda = new Agenda({
  db: {
    address: 'localhost:27017/agenda-sample'
  },
  processEvery: '10 seconds'
});

agenda.define('1tick', function(job, done) {
  console.log('1 tick by ' + job.attrs.data.by);
  done();
});

agenda.define('3tick', function(job, done) {
  console.log('3 tick by ' + job.attrs.data.by);
  done();
});

agenda.define('send email', function(job, done) {
  console.log('send email');
  done();
});


agenda.on('ready', function () {
  agenda.every('1 second', '1tick', {by: 'chris'});
  agenda.every('3 second', '3tick', {by: 'chris'});
  agenda.now('send email');
  agenda.start();
});


