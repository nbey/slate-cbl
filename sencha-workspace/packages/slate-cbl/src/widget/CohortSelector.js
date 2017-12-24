Ext.define('Slate.cbl.widget.CohortSelector', {
    extend: 'Slate.cbl.widget.ClearableSelector',
    xtype: 'slate-cbl-cohortselector',


    config: {
        componentCls: 'slate-cohort-selector',

        fieldLabel: 'Section Cohort',
        labelWidth: 120,

        displayField: 'Cohort',
        valueField: 'Cohort',
        forceSelection: true,
        editable: false,
        matchFieldWidth: false
    }
});