Ext.define('SlateTasksStudent.view.TodoList', {
    extend: 'Slate.cbl.widget.SimplePanel',
    xtype: 'slatetasksstudent-todolist',
    requires:[
    ],

    config: {
    },

    componentCls: 'slate-todolist',

    title: 'To-Do List – Personal',

/*
    data: [
        {
            title: 'Active Items',
            canAdd: true,
            items: [
                {
                    title: 'Apply for scholarship by January 6th: https://scienceleadership.org/scholarship',
                    date: 'Jan 6, 2016',
                    status: 'late'
                },
                {
                    title: 'Email Mrs. Johnson about science hw',
                    date: 'May 31, 2016',
                    status: 'due'
                },
                {
                    title: 'Research internships and apply',
                    date: 'July 1, 2018'
                }
            ]
        },
        {
            title: 'Completed Items',
            buttons: [
                {
                    icon: 'times',
                    text: 'Clear All'
                },
                {
                    icon: 'caret-up',
                    text: 'Hide'
                }
            ],
            items: [
                {
                    title: 'Apply for scholarship by January 6th: https://scienceleadership.org/scholarship',
                    date: 'Jan 6, 2016',
                    completed: true
                },
                {
                    title: 'Email Mrs. Johnson about science hw',
                    date: 'May 31, 2016',
                    completed: true
                },
                {
                    title: 'Research internships and apply',
                    date: 'July 1, 2018',
                    completed: true
                }
            ]
        }
    ],
*/

    tpl: [
    '<tpl for=".">',
        '<div class="slate-simplepanel-header">To-Do List - {section}</div>',
        '<tpl for="todos">',
            '<tpl exec="values.parent = parent;"></tpl>',
            '<section class="slate-todolist-itemgroup">',
                '<header class="slate-todolist-itemgroup-header">',
                    '<h4 class="slate-todolist-itemgroup-title">{Title}</h4>',
                    '<tpl if="buttons">',
                        '<ul class="slate-todolist-itemgroup-actions">',
                        '<tpl for="buttons">',
                            '<li class="slate-todolist-itemgroup-action">',
                                '<button><tpl if="icon"><i class="fa fa-{icon}"></i>&nbsp;</tpl>{text}</button>',
                            '</li>',
                        '</tpl>',
                    '</tpl>',
                '</header>',
                '<ul class="slate-todolist-list">',
                    '<tpl for="items">',
                        '<li class="slate-todolist-item <tpl if="status">slate-todolist-status-{status}</tpl>">',
                            '<input id="todo-item-{ID}" class="slate-todolist-item-checkbox" parentId="{parent.parent.ID}" recordId="{ID}" type="checkbox" <tpl if="Completed">checked</tpl>>',
                            '<div class="slate-todolist-item-text">',
                                '<label for="todo-item-{ID}" class="slate-todolist-item-title">{Description}</label>',
                            '</div>',
                            '<div class="slate-todolist-item-date">{DueDate:date("M j, Y")}</div>',
                        '</li>',
                    '</tpl>',
                    '<tpl if="canAdd">',
                        '<li class="slate-todolist-item slate-todolist-blank-item slate-todolist-blank-item-{parent.ID}">',
                            '<input id="todo-item-new-{parent.ID}" class="slate-todolist-item-checkbox" type="checkbox" disabled>',
                            '<div class="slate-todolist-item-text">',
                                '<input id="todo-item-new-text-{parent.ID}" class="slate-todolist-item-title" placeholder="New task&hellip;" parentId="{parent.ID}">',
                            '</div>',
//                            '<div class="slate-todolist-item-date"><i class="fa fa-2x fa-calendar slate-todolist-date-trigger"></i></button></div>',
                            '<div class="slate-todolist-item-date"><i class="slate-todolist-date-trigger" parentId="{parent.ID}"></i></button></div>',
                        '</li>',
                    '</tpl>',
                '</ul>',
            '</section>',
        '</tpl>',
    '</tpl>'
    ],

    listeners: {
        scope: 'this',
        afterrender: function() {
            this.mon(this.el, 'click', this.checkboxClick, this, { delegate: '.slate-todolist-item-checkbox' });
            this.mon(this.el, 'keypress', this.checkboxKeypress, this, { delegate: 'input.slate-todolist-item-title' });
        }
    },

    checkboxClick: function(evt, el) {
        this.fireEvent('checkclick', this, el.getAttribute('parentId'), el.getAttribute('recordId'),el.checked);
    },

    checkboxKeypress: function(evt, el) {
        if (evt.getKey() == evt.ENTER) {
            this.fireEvent('enterkeypress', this, el.getAttribute('parentId'));
        }
    },

    dateTriggerClick: function(evt, el) {
        this.fireEvent('datetriggerclick', this, el, el.getAttribute('parentId'));
    }
});
