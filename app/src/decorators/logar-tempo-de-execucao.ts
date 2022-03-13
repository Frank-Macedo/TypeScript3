export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = (...args: Array<any>)=>{
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução : ${(t2 -  t2 ) /1000} segundos`)
        }


        return descriptor;
    }
}