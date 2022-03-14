import { UnidadeTemnpo } from "../enums/unidade-de-tempo.js";
export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        debugger;
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = UnidadeTemnpo.SEGUNDOS;
            if (emSegundos) {
                divisor = 1000;
                unidade = UnidadeTemnpo.MILISSEGUNDOS;
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução : ${(t2 - t1) / 1000} ${unidade}`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map