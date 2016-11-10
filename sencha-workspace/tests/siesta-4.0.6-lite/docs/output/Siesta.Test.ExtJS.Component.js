Ext.data.JsonP.Siesta_Test_ExtJS_Component({"tagname":"class","name":"Siesta.Test.ExtJS.Component","autodetected":{},"files":[{"filename":"Component.js","href":"Component.html#Siesta-Test-ExtJS-Component"}],"members":[{"name":"destroysOk","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-destroysOk","meta":{}},{"name":"hasPosition","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-hasPosition","meta":{}},{"name":"hasSize","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-hasSize","meta":{}},{"name":"waitForCQ","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCQ","meta":{}},{"name":"waitForCQNotFound","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCQNotFound","meta":{}},{"name":"waitForCQNotVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCQNotVisible","meta":{}},{"name":"waitForCQVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCQVisible","meta":{}},{"name":"waitForComponent","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponent","meta":{}},{"name":"waitForComponentNotVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentNotVisible","meta":{}},{"name":"waitForComponentQuery","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentQuery","meta":{}},{"name":"waitForComponentQueryNotFound","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentQueryNotFound","meta":{}},{"name":"waitForComponentQueryNotVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentQueryNotVisible","meta":{}},{"name":"waitForComponentQueryVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentQueryVisible","meta":{}},{"name":"waitForComponentVisible","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForComponentVisible","meta":{}},{"name":"waitForCompositeQuery","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCompositeQuery","meta":{}},{"name":"waitForCompositeQueryNotFound","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForCompositeQueryNotFound","meta":{}},{"name":"waitForXType","tagname":"method","owner":"Siesta.Test.ExtJS.Component","id":"method-waitForXType","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.ExtJS.Component","short_doc":"This is a mixin, with helper methods for testing functionality relating to Ext.Component. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test.ExtJS","Siesta.Test.SenchaTouch"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test.ExtJS' rel='Siesta.Test.ExtJS' class='docClass'>Siesta.Test.ExtJS</a></div><div class='dependency'><a href='#!/api/Siesta.Test.SenchaTouch' rel='Siesta.Test.SenchaTouch' class='docClass'>Siesta.Test.SenchaTouch</a></div><h4>Files</h4><div class='dependency'><a href='source/Component.html#Siesta-Test-ExtJS-Component' target='_blank'>Component.js</a></div></pre><div class='doc-contents'><p>This is a mixin, with helper methods for testing functionality relating to Ext.Component. This mixin is being consumed by <a href=\"#!/api/Siesta.Test.ExtJS\" rel=\"Siesta.Test.ExtJS\" class=\"docClass\">Siesta.Test.ExtJS</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroysOk' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-destroysOk' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-destroysOk' class='name expandable'>destroysOk</a>( <span class='pre'>components, [description]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion accepts variable number of Ext.Component instances (can be also provided as component query string). ...</div><div class='long'><p>This assertion accepts variable number of Ext.Component instances (can be also provided as component query string).\nThen it calls their \"destroy\" method and verifies that:\n- there were no exceptions during destroy\n- that each component was actually destoyed (since destroy can be canceled in the \"beforedestroy\" event listener)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>components</span> : Ext.Component/Array[Ext.Component]/String<div class='sub-desc'><p>A single instance of Ext.Component, an array of such or a string with component query</p>\n</div></li><li><span class='pre'>description</span> : String (optional)<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-hasPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-hasPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-hasPosition' class='name expandable'>hasPosition</a>( <span class='pre'>component, x, y, [description]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion passes when the passed x and y matches the result of component.getPosition() ...</div><div class='long'><p>This assertion passes when the passed x and y matches the result of component.getPosition()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Ext.Component/String<div class='sub-desc'><p>An Ext.Component instance or a ComponentQuery</p>\n</div></li><li><span class='pre'>x</span> : Int<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Int<div class='sub-desc'>\n</div></li><li><span class='pre'>description</span> : String (optional)<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-hasSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-hasSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-hasSize' class='name expandable'>hasSize</a>( <span class='pre'>component, width, height, [description]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This assertion passes when the passed width and height matches the result of component.getSize() ...</div><div class='long'><p>This assertion passes when the passed width and height matches the result of component.getSize()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Ext.Component/String<div class='sub-desc'><p>An Ext.Component instance or a ComponentQuery</p>\n</div></li><li><span class='pre'>width</span> : Int<div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : Int<div class='sub-desc'>\n</div></li><li><span class='pre'>description</span> : String (optional)<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-waitForCQ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCQ' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCQ' class='name expandable'>waitForCQ</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Shorthand alias for waitForComponentQuery ...</div><div class='long'><p>Shorthand alias for <a href=\"#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQuery\" rel=\"Siesta.Test.ExtJS.Component-method-waitForComponentQuery\" class=\"docClass\">waitForComponentQuery</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The component query phrase</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForCQNotFound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCQNotFound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCQNotFound' class='name expandable'>waitForCQNotFound</a>( <span class='pre'>query, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for waitForComponentQueryNotFound ...</div><div class='long'><p>Alias for <a href=\"#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotFound\" rel=\"Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotFound\" class=\"docClass\">waitForComponentQueryNotFound</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>timeout</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-waitForCQNotVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCQNotVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCQNotVisible' class='name expandable'>waitForCQNotVisible</a>( <span class='pre'>query, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for waitForComponentQueryNotVisible ...</div><div class='long'><p>Alias for <a href=\"#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotVisible\" rel=\"Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotVisible\" class=\"docClass\">waitForComponentQueryNotVisible</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>timeout</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-waitForCQVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCQVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCQVisible' class='name expandable'>waitForCQVisible</a>( <span class='pre'>query, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for waitForComponentQueryVisible ...</div><div class='long'><p>Alias for <a href=\"#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryVisible\" rel=\"Siesta.Test.ExtJS.Component-method-waitForComponentQueryVisible\" class=\"docClass\">waitForComponentQueryVisible</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>timeout</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-waitForComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponent' class='name expandable'>waitForComponent</a>( <span class='pre'>component, rendered, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until the a component with the specified xtype can be detected by a simple ComponentQuery. ...</div><div class='long'><p>Waits until the a component with the specified xtype can be detected by a simple ComponentQuery.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : String<div class='sub-desc'><p>The class name to wait for.</p>\n</div></li><li><span class='pre'>rendered</span> : Boolean<div class='sub-desc'><p>true to also wait for the component to be rendered</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the component has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentNotVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentNotVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentNotVisible' class='name expandable'>waitForComponentNotVisible</a>( <span class='pre'>component, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until the main element of the passed component is not visible. ...</div><div class='long'><p>Waits until the main element of the passed component is not visible. The callback will receive the passed component instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Ext.Component/String<div class='sub-desc'><p>An Ext.Component instance or a ComponentQuery string. In the latter case,\nthis method will also wait until the component query find some component (meaning the component does not have to\nbe already created when waiting starts)</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the component becomes not visible</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQuery' class='name expandable'>waitForComponentQuery</a>( <span class='pre'>selector, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until Ext.ComponentQuery detects some results from the passed query parameter. ...</div><div class='long'><p>Waits until Ext.ComponentQuery detects some results from the passed query parameter. The callback will receive the result of the query.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The component query phrase</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentQueryNotFound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentQueryNotFound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotFound' class='name expandable'>waitForComponentQueryNotFound</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until Ext.ComponentQuery from the passed query parameter is no longer found, and then calls the callback supplied. ...</div><div class='long'><p>Waits until Ext.ComponentQuery from the passed query parameter is no longer found, and then calls the callback supplied.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The component query selector</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentQueryNotVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentQueryNotVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryNotVisible' class='name expandable'>waitForComponentQueryNotVisible</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until the result of the Ext.ComponentQuery is either empty, or the found component(s) is hidden. ...</div><div class='long'><p>Waits until the result of the Ext.ComponentQuery is either empty, or the found component(s) is hidden.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The component query selector</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentQueryVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentQueryVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentQueryVisible' class='name expandable'>waitForComponentQueryVisible</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until all results of the Ext.ComponentQuery are detected and visible. ...</div><div class='long'><p>Waits until all results of the Ext.ComponentQuery are detected and visible.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The component query selector</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForComponentVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForComponentVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForComponentVisible' class='name expandable'>waitForComponentVisible</a>( <span class='pre'>component, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until the main element of the passed component is the 'top' element in the DOM. ...</div><div class='long'><p>Waits until the main element of the passed component is the 'top' element in the DOM. The callback will receive the passed component instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Ext.Component/String<div class='sub-desc'><p>An Ext.Component instance or a ComponentQuery string. In the latter case,\nthis method will also wait until the component query find some component (meaning the component does not have to\nbe already created when waiting starts)</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the component becomes visible</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForCompositeQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCompositeQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCompositeQuery' class='name expandable'>waitForCompositeQuery</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until Siesta.Test.ExtJSCore.compositeQuery detects some results from the passed query parameter. ...</div><div class='long'><p>Waits until <a href=\"#!/api/Siesta.Test.ExtJSCore-method-compositeQuery\" rel=\"Siesta.Test.ExtJSCore-method-compositeQuery\" class=\"docClass\">Siesta.Test.ExtJSCore.compositeQuery</a> detects some results from the passed query parameter. The callback will receive the result of the query.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The composite query phrase</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForCompositeQueryNotFound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForCompositeQueryNotFound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForCompositeQueryNotFound' class='name expandable'>waitForCompositeQueryNotFound</a>( <span class='pre'>query, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until Siesta.Test.ExtJSCore.compositeQuery does not detects any results from the passed query parameter. ...</div><div class='long'><p>Waits until <a href=\"#!/api/Siesta.Test.ExtJSCore-method-compositeQuery\" rel=\"Siesta.Test.ExtJSCore-method-compositeQuery\" class=\"docClass\">Siesta.Test.ExtJSCore.compositeQuery</a> does not detects any results from the passed query parameter.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>The composite query phrase</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div><div id='method-waitForXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Component'>Siesta.Test.ExtJS.Component</span><br/><a href='source/Component.html#Siesta-Test-ExtJS-Component-method-waitForXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Component-method-waitForXType' class='name expandable'>waitForXType</a>( <span class='pre'>xtype, root, callback, scope, timeout</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits until the a component with the specified xtype can be detected by a simple ComponentQuery. ...</div><div class='long'><p>Waits until the a component with the specified xtype can be detected by a simple ComponentQuery.</p>\n\n<p>The \"root\" argument of this method can be omitted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : String<div class='sub-desc'><p>The component xtype to look for.</p>\n</div></li><li><span class='pre'>root</span> : Ext.Container<div class='sub-desc'><p>The container to start a component query from. Optional</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback to call after the xtype has been found</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope for the callback</p>\n</div></li><li><span class='pre'>timeout</span> : Int<div class='sub-desc'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});