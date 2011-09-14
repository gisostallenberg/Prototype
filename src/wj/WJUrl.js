/**
 * WJUrl 
 *
 * Javascript class that represents a (windmill) URL
 *
 * @since Tue Jun 03 2008
 * @author Ron Rademaker
 **/

var WJUrl = Class.create();
WJUrl.prototype = {
	/**
	 * initialize
	 *
	 * Creates a new WJUrl
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param object parameters
	 * @param string url
	 * @return void
	 **/
	initialize: function(parameters, url) {
		this.url = url || "/index.php";
		this.parameters = parameters || {};
	},

	/**
	 * addParameter
	 *
	 * Adds a parameter to the parameters object, returns true if added, false if overwritten
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param string key
	 * @param string value
	 * @return boolean
	 **/
	addParameter: function(key, value) {
		if (this.parameters[key]) {
			this.parameters[key] = value;
			return false;
		}
		else {
			this.parameters[key] = value;
			return true;
		}
	},

	/**
	 * deleteParameter
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param string key
	 * @return string
	 **/
	deleteParameter: function(key) {
		var value = this.parameters[key];
		delete this.parameters[key];
		return value;
	},

	/**
	 * getParameter
	 *
	 * Retrieves the value of a parameter
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param string key
	 * @return string
	 **/
	getParameter: function(key) {
		return this.parameters[key];
	},

	/**
	 * setCt
	 *
	 * Sets the content template
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param string ct
	 * @return void
	 **/
	setCt: function(ct) {
		this.addParameter("ct", ct);
	},

	/**
	 * setDt
	 *
	 * Sets the design template
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param string dt
	 * @return void
	 **/
	setDt: function(dt) {
		this.addParameter("dt", dt);
	},

	/**
	 * setUft
	 *
	 * Sets the user interface function templates
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @param Array uft
	 * @return void
	 **/
	setUft: function(uft) {
		this.addParameter("uft", uft);
	},

	/**
	 * getParameters
	 *
	 * Retrieves all parameters
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @return object
	 **/
	getParameters: function() {
		return this.parameters;
	},

	/**
	 * getUrl
	 *
	 * Gets the URL of this WJUrl
	 *
	 * @since Tue Jun 03 2008
	 * @access public
	 * @return string
	 **/
	getUrl: function() {
		return this.url;
	},

	/**
	 * clone
	 *
	 * Copies all info to a new WJUrl and returns that
	 *
	 * @since Thu Feb 12 2009
	 * @access public
	 * @return WJUrl
	 **/
	clone: function() {
		return new WJUrl(Object.clone(this.parameters), this.url);
	}
}	
