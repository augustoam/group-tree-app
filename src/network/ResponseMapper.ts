// export enum ResponseStatus {
//     Ok = "Ok",
//     Error = "Error"
// }

import { ResponseStatus } from '../__generated__/types'

export interface VoidResponse {
    status: ResponseStatus
}

export interface EntityResponse<T> extends VoidResponse {
    item: T
}

export interface ArrayResponse<T> extends VoidResponse {
    items: T[]
}

interface Page<T> {
    index: number
    size: number
    items: T[]
}

export interface PagedResponse<T> extends VoidResponse {
    total: number,
    page: Page<T>
}

export class ResponseMapper {
    static voidSuccessResponse(): VoidResponse {
        return {
            status: ResponseStatus.Ok
        }
    }

    static entityResponse<T>(responseObject: T): EntityResponse<T> {
        return {
            status: ResponseStatus.Ok,
            item: responseObject
        }
    }

    static arrayResponse<T>(responseObject: T[]): ArrayResponse<T> {
        return {
            status: ResponseStatus.Ok,
            items: responseObject
        }
    }

    static pageResponse<T>(index: number, size: number, items: Array<T>, total: number): PagedResponse<T> {
        return {
            status: ResponseStatus.Ok,
            total: total,
            page: {
                index: index,
                size: size === 0 ? total : size,
                items: items
            }
        }
    }
}

const getPagedDataResponse = (obj: any) => {
    if (obj.data) {

        const keys = Object.keys(obj.data)

        const items = keys.map(key => obj.data[key]?.page?.items)

        // TODO: Solve in better way
        let first = obj.data[keys[0]]
        return {
            ...first,
            page: {
                ...first?.page,
                items: items
            }
        }
    }
    return undefined
}

export const getDataResponse = (obj: any) => {
    if (obj.data) {
        const key = Object.keys(obj.data)[0]
        return obj.data[key]
    }
    return undefined
}

const isEntityResponse = <T>(obj: any): obj is EntityResponse<T> => getDataResponse(obj)?.item !== undefined
const isArrayResponse = <T>(obj: any): obj is ArrayResponse<T> => getDataResponse(obj)?.items !== undefined
const isPagedResponse = <T>(obj: any): obj is PagedResponse<T> => getDataResponse(obj)?.page !== undefined

const getPagedResponse = <T>(obj: any): PagedResponse<T> => getPagedDataResponse(obj)
const getEntityResponse = <T>(obj: any): EntityResponse<T> => getDataResponse(obj)?.item
const getArrayResponse = <T>(obj: any): ArrayResponse<T> => getDataResponse(obj)?.items
const getVoidResponse = (obj: any): VoidResponse => getDataResponse(obj)?.status

export {
    isEntityResponse,
    isArrayResponse,
    isPagedResponse,
    getPagedResponse,
    getEntityResponse,
    getArrayResponse,
    getVoidResponse
}
