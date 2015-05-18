App.view.define('VCreateAgent', {

    extend: 'Ext.Window.window',
	extend: "Ext.window.Window",
    alias: 'widget.createAgent',
    initComponent: function() {
		
		this.width = 800;
        this.height = 660;
        this.title = "Nouvel agent";

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
            '->', {
                text: 'Enregistrer',
				itemId: "Record"
            }, {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];		
        
		this.defaults = {
            split: true
        };	
		
		this.items = [
			{
				text: "1. Typologie du nouvel agent",
				height: 50,
				width: "100%",
				padding: 5
			},
			{
				xtype: "radiogroup",
				vertical: true,
				columns: 1,
				height: 50,
				padding: 5,
				width: "100%",
				items: [
					{boxLabel: 'Stagiaire', name: 'rb', inputValue: '1'},
					{boxLabel: 'Vacataire', name: 'rb', inputValue: '2'},
					{boxLabel: 'Titulaire', name: 'rb', inputValue: '3'}
				]
			}
		];
		
		this.callParent();
		
	}
	
});

        

