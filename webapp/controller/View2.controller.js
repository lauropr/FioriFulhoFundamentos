sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment"  
], (BaseController, Fragment) => {
  "use strict";

  return BaseController.extend("z99.fundamentos.controller.View2", {
      onInit() {

          //A interceptação de uma navegação
          let oRouter = this.getOwnerComponent().getRouter();

          //interceptar o evento - associando uma função ao evento Pattern Matched
          oRouter.getRoute("RouteView2").attachPatternMatched(this.rotaView2, this);

      },
      
      rotaView2(oEvent){

          //Acessa o ID do funcionario
          let sId = oEvent.getParameters().arguments.idFuncionario;
          
          //acessa a página
          let oPage = this.byId("page2");

          let sPath = "/employees/" + sId;

          //realiza o element binding na página
          oPage.bindElement({
            path: sPath,
            model: "dados"
          });
          
          //carrega o fragmento
          Fragment.load({
            name: "z99.fundamentos.view.fragment.detalhes"
          }).then(oFragmento => {
            //inclui o fragmento no controller para que o controller tenha acesso ao conteúdo do fragmento
            this.getView().addDependent(oFragmento);

            //exibe o fragmento na página
            this.getView().byId("page2").addContent(oFragmento);

          });
      },

      aoRetornarPaginaInicial(){
          
          //retorno à view1
          //acessa o roteador
          let oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView1");

      }



  });
});