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

//listener
JBB.namespace('JBB.home.higher.common.listener');

//model
JBB.namespace('JBB.home.higher.model.higherList');

//ui
JBB.namespace('JBB.home.higher.ui.tabPersona');
JBB.namespace('JBB.home.higher.ui.tabHigherCategory');

//content
JBB.namespace('JBB.home.higher.content.listitem');
JBB.namespace('JBB.home.higher.content.personaBox');
