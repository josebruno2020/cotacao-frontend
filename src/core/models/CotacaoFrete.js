export default class CotacaoFrete {
    constructor(uf="", percentual_cotacao="", valor_extra="", transportadora_id="") {
        this.uf = uf;
        this.percentual_cotacao = percentual_cotacao;
        this.valor_extra = valor_extra;
        this.transportadora_id = transportadora_id;

    }
}