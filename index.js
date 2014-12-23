var d3 = require('d3');
var Calendar = require('calendar').Calendar;
var cal = new Calendar();
var consts = require('./consts');

var month = 11;
var year = 2014;

var weeks = cal.monthDays(year, month);
var table = d3.select('#calendar');
var header = table.append('thead');
var body = table.append('tbody');

header
  .append('tr')
  .append('td')
  .attr('colspan', 7)
  .style('text-align', 'center')
  .text(consts.monthNames[month]);

header
  .append('tr')
  .selectAll('td')
  .data(consts.dayNames)
  .enter()
  .append('td')
  .style('text-align', 'center')
  .text(function (d) {
    return d;
  });

weeks.forEach(function (week) {
  body
    .append('tr')
    .selectAll('td')
    .data(week)
    .enter()
    .append('td')
    .attr('class', function (d) {
      return d > 0 ? '' : 'empty';
    })
    .text(function (d) {
      return d > 0 ? d : '';
    })
});
