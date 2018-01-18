/**
 * Extend core store to require students + content area be set before loading
 */
Ext.define('SlateDemonstrationsTeacher.store.StudentCompetencies', {
    extend: 'Slate.cbl.store.StudentCompetencies',


    config: {
        pageSize: 0,
        proxy: {
            type: 'slate-cbl-studentcompetencies',
            include: [
                'Competencies.Skills',
                'Competencies.totalDemonstrationsRequired',
                'Competencies.minimumAverageOffset',
                'effectiveDemonstrationsData',
                'demonstrationsRequired',
                'demonstrationsMissed',
                'demonstrationsComplete',
                'demonstrationsAverage',
                'isLevelComplete',
                'growth'
            ],
            extraParams: {
                limit: 0
            }
        }
    },


    // member methods
    loadIfDirty: function() {
        if (!this.getStudents() || !this.getContentArea()) {
            return;
        }

        this.callParent();
    }
});