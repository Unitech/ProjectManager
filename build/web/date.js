

function getTimeSpent(e){
    e.data.id = null;
    var dt = new Date().getTime();
    e.data.field2 = eval((parseInt(dt) - parseInt(e.data.field1)) + parseInt(e.data.field2));
    e.data.field1 = null;
    var dtP = new Date(e.data.field2);
    e.data.spentTime = (eval(parseInt(dtP.getDay()) - 4) + "d" + eval(parseInt(dtP.getHours()) - 1) + "h" + dtP.getMinutes() + "m" + dtP.getSeconds());
    return e;
}

function setTimeSpent(e){
    e.data.id = null;
    if (eval(e.data.field2) == undefined){
        e.data.field2 = "0";
    }
    var dt = new Date().getTime();
    e.data.field1 = dt;
    return e;
}


function getActualDate(){
    var cT = new Date();
    realMonth = eval(parseInt(cT.getMonth()) + 1);
    return realMonth + "/"+ cT.getDate() + "/" + cT.getFullYear();
}

var colsProjects = [
            	{header : 'projName', dataIndex : 'projName', hidden : false, width : 200},
                {header : 'priority', dataIndex : 'priority', hidden : false, sortable : true},
		{header : 'progress', dataIndex : 'progress', hidden : false, sortable : true},
		{header : 'field1', dataIndex : 'field1', hidden : true},
		{header : 'field2', dataIndex : 'field2', hidden : true},
		{header : 'beginDate', dataIndex : 'beginDate', hidden : true},
		{header : 'endDate', dataIndex : 'endDate', hidden : true},
		{header : 'previsionDate', dataIndex : 'previsionDate', hidden : true},
		{header : 'projCmt', dataIndex : 'projCmt', hidden : true},
		{header : 'previsionTime', dataIndex : 'previsionTime', hidden : false},
		{header : 'spentTime', dataIndex : 'spentTime', hidden : true},
		{header : 'projLogo', dataIndex : 'projLogo', hidden : true},
		{header : 'projLink', dataIndex : 'projLink', hidden : true},
		{header : 'id', dataIndex : 'id', hidden : true},
	];

var formProject =  [
               {fieldLabel:'Project Name',name:'projName', xtype : 'textfield'},
               {name:'field1', xtype : 'hidden'},
               {name:'field2', xtype : 'hidden'},
    {
        fieldLabel:'Progress',
        name:'progress',
        xtype : 'combo',
        width : 150,
        triggerAction: 'all',
        mode: 'local',
        displayField: 'value',
        value : '0%',
        store: new Ext.data.SimpleStore({
            id: 0,
            fields: ['value'],
            data : [['0%'], ['10%'], ['20%'], ['30%'], ['40%'], ['50%'], ['60%'], ['70%'], ['80%'], ['90%'], ['100%']]
        })
    },
    {
        fieldLabel:'Priority',
        name:'priority',
        xtype : 'combo',
        triggerAction: 'all',
        mode: 'local',
        value : '2 - Medium',
        displayField: 'text',
//        valueField : 'value',
        width : 150,
        store: new Ext.data.SimpleStore({
            id: 0,
            fields: ['value', 'text'],
            data : [['0', '0 - Very Low'], ['1', '1 - Low'], ['2', '2 - Medium'], ['3', '3 - High'], ['4', '4 - Very High'], ['5', '5 - Max']]
        })
    },
    {
     fieldLabel:'Time planned',
        name:'previsionTime',
        xtype : 'combo',
        width : 150,
        triggerAction: 'all',
        mode: 'local',
        displayField: 'value',
        value : '5h',
        store: new Ext.data.SimpleStore({
            id: 0,
            fields: ['value'],
            data : [['1h'], ['2h'], ['3h'], ['5h'], ['10h'], ['15h'], ['20h'], ['40h'], ['50h'], ['70h'], ['100h']]
        })
    },
          {
     fieldLabel:'Time spent',
        name:'spentTime',
        xtype : 'combo',
        width : 150,
        triggerAction: 'all',
        mode: 'local',
        displayField: 'value',
        value : '0h',
        store: new Ext.data.SimpleStore({
            id: 0,
            fields: ['value'],
            data : [['1h'], ['2h'], ['3h'], ['5h'], ['10h'], ['15h'], ['20h'], ['40h'], ['50h'], ['70h'], ['100h']]
        })
    },
               {fieldLabel:'Creation Date',name:'beginDate', xtype : 'datefield', value : getActualDate(), width : 150},
               {fieldLabel:'Updated on',name:'endDate', xtype : 'datefield', value : getActualDate(), width : 150},
               {fieldLabel:'Prevision Date',name:'previsionDate', xtype : 'datefield', width : 150},
               {fieldLabel:'Proj Logo Url',name:'projLogo', xtype :'textfield'},
               {fieldLabel:'SVN Url',name:'projLink', xtype :'textfield'},
               {name:'id', xtype : 'hidden'},
               {fieldLabel:'Description',name:'projCmt', xtype :'htmleditor', height : window.innerHeight - 480}
		       ];
                       

