Ext.define('SlateTasksStudent.view.TaskDetails', {
    extend: 'Slate.cbl.view.modals.Modal',
    xtype: 'slate-taskdetails',
    requires: [
        'Slate.cbl.view.AttachmentsList',
        'Slate.cbl.widget.AttachmentsField',
        'Slate.cbl.view.modals.ModalForm',
        'Slate.cbl.widget.CommentsField',
        'Slate.cbl.widget.RatingView'
    ],

    modal: true,

    title: 'Task',

    dockedItems: [{
        dock: 'bottom',
        xtype: 'container',
        cls: 'slate-modalfooter',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                itemId: 'submit',
                text: 'Submit',
                scale: 'large'
            }]
        }]
    }],

    items: [{
        xtype: 'slate-modalform',
        defaultType: 'displayfield',
        items: [
        {
            fieldLabel: 'Student',
            name: 'FullName'
        },
        {
            fieldLabel: 'Title',
            name: 'Title'
        },
        {
            fieldLabel: 'Subtask of',
            name: 'ParentTaskTitle'
        },
        {
            fieldLabel: 'Type of Experience',
            name: 'TaskExperienceType'
        },
        {
            fieldLabel: 'Due Date',
            name: 'DueDate',
            renderer: Ext.util.Format.dateRenderer('m/d/y')
        },
        {
            fieldLabel: 'Expiration Date',
            name: 'ExpirationDate',
            renderer: Ext.util.Format.dateRenderer('m/d/y')
        },
        {
            xtype: 'slate-tasks-attachmentsfield',
            readOnly: true
        },
        {
            fieldLabel: 'Submitted Date',
            name: 'Submitted',
            renderer: Ext.util.Format.dateRenderer('m/d/y')
        },
        {
            xtype: 'slate-ratingview',
            readOnly: true
        },
        {
            xtype: 'slate-commentsfield',
            fieldLabel: 'Teacher Comments'
        },
        {
            xtype: 'slate-tasks-attachmentsfield'
        }]
    }]
});
