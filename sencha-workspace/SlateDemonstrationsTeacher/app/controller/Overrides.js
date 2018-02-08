Ext.define('SlateDemonstrationsTeacher.controller.Overrides', {
    extend: 'Ext.app.Controller',


    toastTitleTpl: [
        'Standard Override Saved'
    ],

    toastBodyTpl: [
        'Overrode',
        ' <strong>{skill.Code}</strong>',
        ' for',
        ' <strong>{student.FullName}.</strong>'
    ],


    // controller configuration
    views: [
        'Window@Slate.ui',

        'OverrideForm@Slate.cbl.view.demonstrations'
    ],

    stores: [
        'Students',
        'StudentCompetencies',
    ],

    models: [
        'Demonstration@Slate.cbl.model.demonstrations'
    ],


    refs: {
        dashboardCt: 'slate-demonstrations-teacher-dashboard',

        overrideWindow: {
            autoCreate: true,

            xtype: 'slate-window',
            closeAction: 'hide',
            modal: true,
            layout: 'fit',

            mainView: {
                xtype: 'slate-cbl-demonstrations-overrideform'
            }
        }
    },


    // entry points
    control: {
        'slate-demonstrations-teacher-skillfooter button[action=create-override]': {
            click: 'onCreateOverrideClick'
        },
        'slate-cbl-demonstrations-overrideform ^window button[action=submit]': {
            click: 'onSubmitClick'
        }
    },


    // event handlers
    onCreateOverrideClick: function(createBtn) {
        var me = this,
            skillPanel = createBtn.up('window').getMainView(),
            skill = skillPanel.getLoadedSkill(),
            demonstration = me.getDemonstrationModel().create({
                Class: 'Slate\\CBL\\Demonstrations\\OverrideDemonstration',
                Demonstrated: new Date(),
                StudentID: skillPanel.getSelectedStudent(),
                Skills: skill && [
                    {
                        SkillID: skill.getId(),
                        Override: true
                    }
                ],
            }),
            overrideWindow = me.getOverrideWindow({
                ownerCmp: me.getDashboardCt()
            }),
            formPanel = overrideWindow.getMainView();

        if (!skill) {
            return;
        }

        formPanel.setStudent(me.getStudentsStore().getById(skillPanel.getSelectedStudent()));
        formPanel.setSkill(skill);
        formPanel.loadRecord(demonstration);

        overrideWindow.animateTarget = createBtn;
        overrideWindow.show();
    },

    onSubmitClick: function(submitBtn) {
        var me = this,
            formWindow = submitBtn.up('window'),
            formPanel = formWindow.getMainView(),
            demonstration = formPanel.getRecord(),
            studentCompetenciesStore = me.getStudentCompetenciesStore(),
            studentCompetenciesInclude = studentCompetenciesStore.getProxy().getInclude();

        formPanel.updateRecord(demonstration);

        formPanel.setLoading('Saving override&hellip;');

        demonstration.save({
            include: Ext.Array.merge(
                Ext.Array.map(studentCompetenciesInclude, function(include) {
                    return 'StudentCompetencies.'+include;
                }),
                Ext.Array.map(studentCompetenciesInclude, function(include) {
                    return 'StudentCompetencies.next.'+include;
                })
            ),
            success: function(savedDemonstration) {
                var student = formPanel.getStudent(),
                    skill = formPanel.getSkill(),
                    studentCompetencies = savedDemonstration.get('StudentCompetencies') || [],
                    studentCompetenciesLength = studentCompetencies.length,
                    studentCompetencyIndex = 0, nextStudentCompetency,
                    tplData = {
                        student: student ? student.getData() : null,
                        skill: skill ? skill.getData() : null
                    };


                // collapse any embedded "next" records into main array
                for (; studentCompetencyIndex < studentCompetenciesLength; studentCompetencyIndex++) {
                    nextStudentCompetency = studentCompetencies[studentCompetencyIndex].next;

                    if (nextStudentCompetency) {
                        studentCompetencies.push(nextStudentCompetency);
                    }
                }


                // update grid
                studentCompetenciesStore.mergeData(studentCompetencies);


                // show notification to user
                Ext.toast(
                    Ext.XTemplate.getTpl(me, 'toastBodyTpl').apply(tplData),
                    Ext.XTemplate.getTpl(me, 'toastTitleTpl').apply(tplData)
                );

                formWindow.hide();

                formPanel.setLoading(false);
            },
            failure: function(savedDemonstration, operation) {
                formPanel.setLoading(false);

                Ext.Msg.show({
                    title: 'Failed to save override',
                    message: operation.getError(),
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        });
    }
});