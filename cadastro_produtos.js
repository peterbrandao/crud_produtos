//cadastro_produtos
module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }

    deletar(indice){
        this.produtos.splice(indice,1);A
    }
    
    listar() {
        return this.produtos;
    
        
    }    
}