type LKResult = {
    classname: string,
    cs: number | string,
    nooo: number | string,
    noa: number | string,
    si: number | string
}

type CKResult = {
    classname: string,
    wmc: number | string,
    dit: number | string,
    noc: number | string,
    cbo: number | string,
    rfc: number | string,
    loc: number | string
}

type result = LKResult | CKResult;

export type { result, LKResult, CKResult } 