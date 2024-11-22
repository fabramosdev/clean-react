import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

describe('RemoteAuthentication', () => {
    test('should call http post client with correct url', async () => {
        const url = 'any_url'
        const httpPostClientSpy = new HttpPostClientSpy()
        // sut = System Under Tests
        const sut = new RemoteAuthentication(url, httpPostClientSpy)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})