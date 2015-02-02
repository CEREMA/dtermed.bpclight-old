App.view.define('VShowFormation', {
    extend: "Ext.window.Window",
    alias: 'widget.TShowFormation',
    initComponent: function() {
        this.width = 1024;
        this.height = 660;
        this.title = "...";

        this.layout = {
            type: 'fit'
        };

        this.bbar = [
            '->', {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
			{
				html: '<iframe width=100% height=100% src="/formation/'+this.id+'"></iframe>',
				flex: 1
			}
		];

        this.callParent();
    }
});