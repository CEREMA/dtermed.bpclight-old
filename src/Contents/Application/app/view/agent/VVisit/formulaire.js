var customEditors = {},customRenderers = {};
    
// create custom editor & renderer for property "Visibility"
customEditors['TU'] = Ext.create('PropertyGridComboBoxEditor', {
	data: [
		{ 'type': 'Show',        'value': '0' },
		{ 'type': 'Hide',        'value': '1' },
		{ 'type': 'Readonly',    'value': '2' },
		{ 'type': 'Pluged out',    'value': '3' }
	]
});
customRenderers.TU = customEditors.TU.renderer;

App.view.define('agent.VVisit.formulaire', {
    extend: "Ext.window.Window",
	alias: "widget.TVisitData",
    initComponent: function() {
		this.title="Dossier médical";
        this.width = 800;
        this.height = 780;

        this.layout = {
            type: 'fit'
        };

        this.bbar = [
            '->', {
                text: 'Quitter',
				itemId: "Exit"
            }
        ];
		
		this.defaults={
			border: false
		};
		
        this.items = [
			{
				layout: "hbox",
				items: [
					{
						layout: "vbox",
						border: false,
						defaults: {
							padding: 15
						},
						items: [
						{
							layout: "hbox",
							border: false,
							width: "100%",
							bodyStyle: "background-color: transparent",
							items: [
								{
									xtype: "combo",
									fieldLabel: "Type de visite",
									labelAlign: "top",
									width: 200,
									displayField: "typ",
									store: App.store.create({
										fields: [
											"typ"
										],
										data: [
											{
												typ: "Périodique"
											},
											{
												typ: "Reprise"
											},
											{
												typ: "Demande du service"
											},
											{
												typ: "Demande du médecin"
											},
											{
												typ: "Visite quinquennale"
											},
											{
												typ: "Annuelle"								
											}
										]
									})
								},
								{
									xtype: "combo",
									fieldLabel: "Catégorie",
									labelAlign: "top",
									width: 100,
									displayField: "cat",
									margin: {
										left: 10
									},
									store: App.store.create({
										fields: [
											"cat"
										],
										data: [
											{
												cat: "SMS"
											},
											{
												cat: "SMR"
											}
										]						
									})
								},
								{
									xtype: "datefield",
									fieldLabel: "Date",
									margin: {
										left: 10
									},						
									labelAlign: "top",
									width: 100
								}					
							]
						},
						{
							xtype: "textarea",
							fieldLabel: "Poste actuel",
							width: "100%"
						},
						{
							xtype: "textarea",
							fieldLabel: "Pathologies en cours",
							width: "100%"
						},
						{
							xtype: "textarea",
							fieldLabel: "Traitements actuels",
							width: "100%"
						},
						{
							xtype: "checkboxgroup",
							fieldLabel: "Divers",
							width: 400,
							items: [
								{boxLabel: 'Tabac', name: 'rb', inputValue: '1'},
								{boxLabel: 'Alcool', name: 'rb', inputValue: '1'},
								{boxLabel: 'Sport', name: 'rb', inputValue: '1'}
							]
						},				
						{
							xtype: "textarea",
							fieldLabel: "Orientations",
							width: "100%"
						},
						{
							xtype: "htmleditor",
							fieldLabel: "Conclusion",
							width: "100%"
						}						
						],
						flex: 1
					},
					{
						layout: "vbox",
						width: 205,
						border: false,
						height: "100%",
						items: [
							{
								html: "Renseignement généraux",
								padding: 5							
							},
							{
								xtype: "propertygrid",
								border: false,
								height: 250,
								width: "100%",
								source: {
									"Taille": 0,
									"Poids": 0,
									"TA": 0,
									"Pouls": 0,
									"Test EFR": 0,
									"Test visuel OD": 0,
									"Test visuel OG": 0,
									"Test urinaire": true
								}						
							},
							{
								html: "Test EFR",
								padding: 5
							},
							{
								xtype: "propertygrid",
								border: false,
								height: 250,
								width: "100%",
								source: {
									"CVF": 0,
									"VEMS": 0,
									"VEMS/CVF": 0,
									"DEMM": 0
								}						
							},
							{
								html: "Test urinaire",
								padding: 5
							},
							{
								xtype: "propertygrid",
								border: false,
								customEditors: customEditors,
								customRenderers: customRenderers,
								height: 250,
								width: "100%",
								source: {
									"TU": 0
								}						
							}							
						]
					}
				]
			}
		];

        this.callParent();
    }
});