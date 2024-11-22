import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
    email: string
    password: string
}

export interface Authentication {
    autth(params: AuthenticationParams): Promise<AccountModel>
}