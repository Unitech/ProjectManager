Ext.onReady(function(){
	Ext.QuickTips.init();
	var login = new Ext.FormPanel({
		labelWidth:80,
		url:'j_spring_security_check',
		frame:true,
                bodyStyle : 'padding : 10px;',
		defaultType:'textfield',
		width:300,
		height:150,
		monitorValid:true,
                items:[{
			fieldLabel:'Username',
			name:'j_username',
                        value : 'root',
			allowBlank:false
		},{
			fieldLabel:'Password',
                        value : '123456',
			name:'j_password',
			inputType:'password',
			allowBlank:false
		}],
            buttonAlign : 'center',
		buttons:[{
			text:'Login',
			formBind: true,
			handler:function(){
			login.getForm().submit({
				method:'POST', 
				success:function(){
						window.location = 'index.html';
			},
                    failure:function(form, action){
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText);
					Ext.Msg.alert('Login Failed!', obj.errors.reason);
				}else{
					Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText);
				}
				login.getForm().reset();
			} 

			});
		}
		}]
	});
       new Ext.Panel({
		region : 'north',
		height : 60,
		border : false,
                renderTo : 'login',
		html : '<img src="img/header.png" alt="hemca" />'
        });
        
        new Ext.Window({
            title : 'Login (Spring Security) - Demo app',
            closable : false,
            modal : true,
            items : login
        }).show();
});
