import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8085/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map((dadosDeHoje) => {
                return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map