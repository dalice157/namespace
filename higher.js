/**
 * A namespace.
 * Job Bank = JB
 * @namespace JBB
 * @param {string} ns_string
 * @returns {Object}
 */
var JBB = JBB || {};
JBB.namespace = function (ns_string) {
		var parts = ns_string.split('.'),
				parent = JBB,
				i;
		if (parts[0] === "JBB") {
				parts = parts.slice(1)
		}
		for (i = 0; i < parts.length; i++) {
				if (typeof parent[parts[i]] === "undefined") {
						parent[parts[i]] = {};
				}
				parent = parent[parts[i]];
		}
		return parent;
};

//model
JBB.namespace('JBB.home.higher.model.higherList');

//ui
JBB.namespace('JBB.home.higher.ui.tabPersona');
JBB.namespace('JBB.home.higher.ui.tabHigherCategory');
JBB.namespace('JBB.home.higher.ui.listContent');

//content
JBB.namespace('JBB.home.higher.content.personaBox');
JBB.namespace('JBB.home.higher.content.listitem');