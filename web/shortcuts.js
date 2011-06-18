var map = new Ext.KeyMap(document, [
	    {
	        key: "1",
	        tab:true,
	        fn: function(){projectPanel.setActiveTab(0);}
	    }, {
	    	key: "2",
	        tab:true,
	        fn: function(){projectPanel.setActiveTab(1);}
	    }, {
	    	key: "3",
	        tab:true,
	        fn: function(){projectPanel.setActiveTab(2);}
	    },{
	    	key: "s",
	        tab:true,
	        fn: function(){
                    var panel = projectPanel.getActiveTab().title;
                    if (panel == "In progress"){
                        formInprogressProjects.getForm().updateRecord(formInprogressProjects.record);
                    }
                }
	    }
	]);
        