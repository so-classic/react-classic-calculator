'use strict';
/* global describe, it, jest, expect */

jest.dontMock('../Calculator');

var React = require('react');
var TestUtils = require('react-addons-test-utils');
var Calculator = require('../Calculator');

describe('Calculator test', function () {

	function logChange (val) {
		console.log('Selected: ' + val);
	}

	// Render an instance of the component
	var instance = TestUtils.renderIntoDocument(
		<Calculator onChange={logChange} value="test" inputClassName="testClass" />
	);

	var inputElement = TestUtils.findRenderedDOMComponentWithTag(instance, 'input');

	it('should assign the given inputClassName', function () {
		expect(inputElement.className).toEqual('testClass');
	});

});
