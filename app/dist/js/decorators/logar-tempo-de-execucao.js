export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = (...args) => {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução : ${(t2 - t2) / 1000} segundos`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map