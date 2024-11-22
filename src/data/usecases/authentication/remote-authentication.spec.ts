import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

type SubTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SubTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    // sut = System Under Tests
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {
    test('should call http post client with correct url', async () => {
        const url = 'another_url'
        const { sut, httpPostClientSpy } = makeSut(url)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})