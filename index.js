'use strict';

var Agenda = require('agenda');
var agenda = new Agenda({db: { address: 'localhost:27017/agenda-sample'}});

agenda.define('tick', function(job, done) {
  console.log('agenda sample ' + job.attrs.data.by);
  done();
});

agenda.every('3 seconds', 'tick', {by: 'chris'});

agenda.start();

