
import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js"
import { Negociacao } from "../models/negociacao.js"

export class NegociacoesService{

    public obterNegociacoes() : Promise<Negociacao[]>{
        
        return fetch('http://localhost:8085/dados')
        .then(res => res.json())
        .then((dados: NegociacoesDoDia[])=>{
            return dados.map((dadosDeHoje)=>{
                return new Negociacao(
                    new Date(),
                    dadosDeHoje.vezes,
                    dadosDeHoje.montante
                )
            })
        })
    }
}