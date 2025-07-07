sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("z99.fundamentos.controller.View1", {
        onInit() {
            //alimenta o dropDown (Select) de forma programática

                //acessa o Component.js
                let oComponent = this.getOwnerComponent();

                //acessa o modelo
                let oModelo = oComponent.getModel("dados");
                //acessa a propriedade employees
                let aEmployees = oModelo.getProperty("/employees");

                //acessa o Select
                let oSelect = this.byId("DropDownFuncionarios");
                //realiza o binding do array no Select
                oSelect.bindItems({
                    path: '/employees',
                    model: 'dados',
                    template: new sap.ui.core.ListItem({
                        key: '{dados>id}',
                        text: '{dados>name}'
                    })
                });

        },

        onBeforeRendering(){

        },

        aoSelecionarFuncionario(oEvent){
            //acessa o item selecionado via binding context
            let oFuncionario = oEvent.getParameters().listItem.getBindingContext("dados");
            let oCaminhoFuncionario = oFuncionario.getPath();

            //navega para a página de detalhe
            //acessa o roteador
            let oRouter = this.getOwnerComponent().getRouter();
            
            oRouter.navTo("RouteView2", {
                idFuncionario: oCaminhoFuncionario.substring(11)
            });
        }



    });
});