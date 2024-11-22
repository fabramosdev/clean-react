import { HttpPostClient } from "data/protocols/http/http-post-client"
import { RemoteAuthentication } from "./remote-authentication"

describe('RemoteAuthentication', () => {
    test('should call http post client with correct url', async () => {
        class HttpPostClientSpy implements HttpPostClient {
            url?: string

            async post(url: string): Promise<void> {
                this.url = url
                return Promise.resolve()    
            }
        }
        const url = 'any_url'
        const httpPostClientSpy = new HttpPostClientSpy()
        // sut = System Under Tests
        const sut = new RemoteAuthentication(url, httpPostClientSpy)
        sut.auth()
        expect(httpPostClientSpy.url).toBe(url)
    })
})