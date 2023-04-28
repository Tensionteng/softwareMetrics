export type LKResult = {
    classname: string,
    cs: number,
    noo: number,
    noa: number,
    si: number
}

export type CKResult = {
    classname: string,
    wmc: number,
    dit: number,
    noc: number,
    cbo: number,
    rfc: number,
    loc: number
}

export type weightOfUser = {
    username: string,
    weight: number
}

export type weightOfUsercase = {
    usercaseName: string,
    weight: number
}

export type usercaseGraph = {
    users: weightOfUser[],
    usercases: weightOfUsercase[]
}

export type messageFlowModule = {
    moduleName: string,
    fan_in: number,
    fan_out: number,
    complexity: number
}

export type messageFlow = {
    moduleList: messageFlowModule[],
    max_in: number,
    max_out: number,
    avg_in: number,
    avg_out: number,
    depth: number
}

export type result = LKResult[] | CKResult[] | messageFlow | usercaseGraph;

