/* 
 * Generated by Natileo - Velociraptor
 * on Fri Nov 05 01:16:12 CET 2010
 * hemca.com
 * by Strzelewicz Alexandre
 */ 

var viewportArchive;
var storeArchiveProjects;
var ArchiveProjects;
var gridListArchiveProjects;

Ext.onReady(function(){

	/*
     * Mapping
     * 
     */
	
	ArchiveProjects = Ext.data.Record.create([
		{name : 'projName', type : 'String'},
		{name : 'progress', type : 'String'},
		{name : 'field1', type : 'String'},
		{name : 'field2', type : 'String'},
		{name : 'beginDate', type : 'String'},
		{name : 'endDate', type : 'String'},
		{name : 'previsionDate', type : 'String'},
		{name : 'projCmt', type : 'String'},
		{name : 'priority', type : 'String'},
		{name : 'previsionTime', type : 'String'},
		{name : 'spentTime', type : 'String'},
		{name : 'projLogo', type : 'String'},
		{name : 'projLink', type : 'String'},
		{name : 'id', type : 'int'}
	]);
	
	
	
	
	/* 
	 * Proxy
	 * 
	 */
	var proxyArchiveProjects = new Ext.data.HttpProxy({
		api: {
			read   : 'archiveProjects/read.action',
			create : 'archiveProjects/create.action',
			update : 'archiveProjects/update.action',
			destroy: 'archiveProjects/delete.action'
		}
	});
	
	var readerArchiveProjects = new Ext.data.JsonReader({
		totalProperty	: 'total', 
		successProperty : 'success', 
		idProperty	: 'id', 
		root		: 'data'
		}, 
		ArchiveProjects
	);

	var writerArchiveProjects = new Ext.data.JsonWriter({
		encode		: true,
		writeAllFields	: true
    });
	
	storeArchiveProjects = new Ext.data.Store({
		id	: 'user',
                remoteSort : false,
		proxy	: proxyArchiveProjects,
                sortInfo: {field: 'priority', direction: 'DESC'},
		autoSave: true,
		reader	: readerArchiveProjects,
		writer	: writerArchiveProjects
	});
    
    storeArchiveProjects.load({params:{"start":0, "limit":50}});
	//storeArchiveProjects.load();
	
	/*
	 * Plugins
	 */
	 
	 var filterArchiveProjects = new Ext.ux.grid.GridFilters({
		local	: false,
		filters	:[
			{dataIndex : 'projName', type : 'string'},
			{dataIndex : 'progress', type : 'string'},
			{dataIndex : 'field1', type : 'string'},
			{dataIndex : 'field2', type : 'string'},
			{dataIndex : 'beginDate', type : 'string'},
			{dataIndex : 'endDate', type : 'string'},
			{dataIndex : 'previsionDate', type : 'string'},
			{dataIndex : 'projCmt', type : 'string'},
			{dataIndex : 'priority', type : 'string'},
			{dataIndex : 'previsionTime', type : 'string'},
			{dataIndex : 'spentTime', type : 'string'},
			{dataIndex : 'projLogo', type : 'string'},
			{dataIndex : 'projLink', type : 'string'},
			{dataIndex : 'id', type : 'int'}
		]
	});
	
	/*
	 * Elements
	 */
	 
	formArchiveProjects = new Ext.FormPanel({
		title      : 'ArchiveProjects form',
		region     : 'center',
		split      : 'true',
		bodyStyle  : 'padding:20px;',
		defaults   : {width : window.innerWidth - 550, xtype : 'textfield'},
		items      : formProject,
		buttonAlign : 'center',
                tbar : [
                      {
			text     : '< To In Progress',
			formBind : true,
			handler  : function(){
                            var e = new SuspendProjects;
                            e.data = formArchiveProjects.getForm().getValues();
                            e = setTimeSpent(e);
                            storeInprogressProjects.insert(0, e);
                            var r = gridListArchiveProjects.getSelectionModel().getSelected();
			    storeArchiveProjects.remove(r);
                            formArchiveProjects.getForm().reset();
			}
		}, '-',
                {
			text     : 'Done >',
			formBind : true,
			handler  : function(){
                            var e = new SuspendProjects;
                            e.data = formArchiveProjects.getForm().getValues();
                            e.data.id = null;
                           storeSuspendProjects.insert(0, e);
                            var r = gridListArchiveProjects.getSelectionModel().getSelected();
			    storeArchiveProjects.remove(r);
                            formArchiveProjects.getForm().reset();
			}
		}
                ],
		buttons     : 
		[{
			text     : 'Create', 
			formBind : true,
			handler  : function(){
                            if (formArchiveProjects.getForm().findField('id').value == undefined){
				var e = new ArchiveProjects;
				e.data = formArchiveProjects.getForm().getValues();
				storeArchiveProjects.insert(storeArchiveProjects.getCount(), e);
				formArchiveProjects.getForm().reset();
                            }else{
                                Ext.MessageBox.alert('Status', 'Can\'t recreate the same proj, reset to create new.');
                            }
			}
		},{
			text     : 'Update',
			formBind : true, 
			handler  : function(){
				formArchiveProjects.getForm().updateRecord(formArchiveProjects.record);
			}
		},{  
			text    : 'Delete',
			handler : function(){
				formArchiveProjects.getForm().reset();
				var r = gridListArchiveProjects.getSelectionModel().getSelected();
				storeArchiveProjects.remove(r);
				gridListArchiveProjects.getSelectionModel().selectRow(r.lastIndex);
			}
		},{
			text     : 'Reset',
			formBind : true,
			handler  : function(){
				formArchiveProjects.getForm().reset();
			}
		}
                ]
	});

	gridListArchiveProjects = new Ext.grid.GridPanel({
    store     : storeArchiveProjects,
    columns   : colsProjects,
    region    : 'west',
    width     : 400,
    split     : true,
    local : true,
    title     : '<center>Archive</center>',
    frame     : true,
    tbar :[
    {
        iconCls : 'silk-delete',
        text : 'Delete',
        handler : function(){
            Ext.MessageBox.confirm('Status', 'Delete ? ', function(btn){
                if (btn == 'yes') {
				formArchiveProjects.getForm().reset();
				var r = gridListArchiveProjects.getSelectionModel().getSelected();
				storeArchiveProjects.remove(r);
				gridListArchiveProjects.getSelectionModel().selectRow(r.lastIndex);
                }
            });

        }
    }
    ],
    plugins   : [filterArchiveProjects],
    listeners : {
        rowclick:function(grid, row, event){
            formArchiveProjects.record = grid.getStore().getAt(row);
            formArchiveProjects.getForm().loadRecord(formArchiveProjects.record);
        }
    }
});

        viewportArchive = new Ext.Panel({
            title : 'Proposals/Suspended',
            xtype : 'viewport',
            layout : 'border',
            items     : [gridListArchiveProjects, formArchiveProjects]
        });

/*	var viewport = new Ext.Viewport({
		layout    : 'border',
		renderTo  : Ext.getBody(),
	
	});*/
});