
/* index for viewport project manager */

Ext.onReady(function(){

	/*
     * Mapping
     * 
     */
	
	var Project = Ext.data.Record.create([
	     {name : 'priority', type : 'string'},
	     {name : 'id', type : 'int'},
	     {name : 'projName', type : 'string'},
	     {name : 'beginDate',type : 'string'},
	     {name : 'endDate', type : 'string'},
	     {name : 'previsionDate', type : 'string'},
	     {name : 'projCmt', type : 'string'},
	     {name : 'previsionTime', type : 'string'},
	     {name : 'spentTime', type : 'string'},
	     {name : 'projLogo', type : 'string'},
	     {name : 'projLink', type : 'string'}
	]);
	
	var colsProj = [
	     {id: 'name', header : 'Name', dataIndex: 'projName', editor: new Ext.form.TextField()},
	     {header : 'id', dataIndex : 'id', hidden : true},
	     {header : 'Priority', dataIndex : 'priority', width : 45},
	     {header : 'Begin Date', dataIndex : 'beginDate', hidden : true},
	     {header : 'End Date', dataIndex : 'endDate', hidden : true},
	     {header : 'Prevision Date', dataIndex : 'previsionDate', width : 90},
	     {header : 'Description', dataIndex : 'projCmt', hidden : true},
	     {header : 'TTP', dataIndex : 'previsionTime', width : 45},
	     {header : 'ST', dataIndex : 'spentTime', width : 45},
	     {header : 'Proj Logo', dataIndex : 'projLogo', hidden: true},
	     {header : 'Proj Link', dataIndex : 'projLink', hidden: true}
	];
	
	/* 
	 * Proxy
	 * 
	 */
	var proxyProj = new Ext.data.HttpProxy({
		api: {
			read   : 'proj/listProj.action',
			create : 'proj/createProj.action',
			update : 'proj/updateProj.action',
			destroy: 'proj/deleteProj.action'
		}
	});
    
    var readerProj = new Ext.data.JsonReader({totalProperty: 'total', successProperty: 'success',idProperty: 'id', root: 'data'}, Project);

    var writerProj = new Ext.data.JsonWriter({
        encode: true,
        writeAllFields: true
    });
    
    var storeProj = new Ext.data.Store({
    	id: 'user',
    	proxy: proxyProj,
    	autoSave: true,
    	reader: readerProj,
    	writer: writerProj
    });
    
	/*
	 * Widgets
	 * 
	 */
	
	storeProj.load({params:{start: 0, limit: "JE TA BAISE"}});
	
	var formProj = new Ext.FormPanel({
		title:'Create New Proj',
		region : 'center',
		split: 'true',
		bodyStyle:'padding:20px;',
		defaults : {anchor:'100%'  },
		items:[
		       {fieldLabel:'Project Name',name:'projName', xtype : 'textfield'},
		       {fieldLabel:'Priority',name:'priority', xtype : 'textfield'},
		       {fieldLabel:'Proj Logo Url',name:'projLogo', xtype :'textfield'},
		       {fieldLabel:'Proj Link Url',name:'projLink', xtype :'textfield'},
		       {fieldLabel:'Time planned',name:'previsionTime', xtype :'textfield'},
		       {fieldLabel:'Time spent',name:'spentTime', xtype :'textfield'},
		       {fieldLabel:'Begin Date',name:'beginDate', xtype : 'textfield'},
		       {fieldLabel:'End Date',name:'endDate', xtype : 'textfield'},
		       {fieldLabel:'Prevision Date',name:'previsionDate', xtype : 'textfield'},
		       {name:'id', xtype : 'hidden'},
		       {fieldLabel:'Description',name:'projCmt', xtype :'htmleditor',height: 500}
		       ],
		buttonAlign : 'center',
		buttons:[{
			text : 'Create', 
			formBind : true,
			handler : function(){
				var e = new Project;
				e.data = formProj.getForm().getValues();
				storeProj.insert(storeProj.getCount(), e);
				formProj.getForm().reset();
			}
		},{
			text : 'Update',
			formBind : true, 
			handler : function(){
				//formProj.getForm().updateRecord(formProj.record);
				storeProj.update({params:{start: 0, limit: "JE TA BAISE"}});
			}
		},{  
			text:'Delete',
			handler: function(){
				formProj.getForm().reset();
				var r = gridListProj.getSelectionModel().getSelected();
				storeProj.remove(r);
				gridListProj.getSelectionModel().selectRow(r.lastIndex);
			}
		},{
			text : 'Reset',
			formBind: true,
			handler : function(){
				formProj.getForm().reset();
			}
		}]
	});

	var gridListProj = new Ext.grid.GridPanel({
		store : storeProj,
		columns : colsProj,
		region : 'west',
		width : 400,
		split : true,
		title : '<center>Project</center>',
		autoExpandColumn : 'name',
		frame : true,
		listeners :{ 
			rowclick:function(grid, row, event){ 
				formProj.record = grid.getStore().getAt(row);
				formProj.getForm().loadRecord(formProj.record);
			}
		}
	});
	
	/*
	 * HEMCA
	 */
	
	var header = new Ext.Panel({
		region : 'north',
		height : 60,
		border : false,
		html : '<img src="img/header.png" alt="hemca" />'
	});
	
	var viewport = new Ext.Viewport({
		layout : 'border',
		renderTo : Ext.getBody(),
		items : [header, gridListProj, formProj]
	});
});