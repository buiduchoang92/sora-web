export const CUSTOMER_LOADING = 'CUSTOMER_LOADING'
export const CUSTOMER_FAIL = 'CUSTOMER_FAIL'
export const CUSTOMER_SUCCESS = 'CUSTOMER_SUCCESS'
export const CUSTOMER_POST_SUCCESS = 'CUSTOMER_POST_SUCCESS'

export type CustomerType = {
  storeID: number
  first_name: string
  last_name: string
  email: string
  addressID: number
  active: number
  password: string
  username: string
  // CUSTOMER_ability?: GuestAbility[]
  // guest_sprites?: GuestSprites
}
export type CustomerAbility = {
  ability: {
    name: string
    url: string
  }
}
export type CustomerSprites = {
  front_default: string
}

export interface CustomerLoading {
  type: typeof CUSTOMER_LOADING
}

export interface CustomerFail {
  type: typeof CUSTOMER_FAIL
}

export interface CustomerSuccess {
  type: typeof CUSTOMER_SUCCESS
  payload: Array<CustomerType>
}

export interface CustomerPostSuccess {
  type: typeof CUSTOMER_POST_SUCCESS
  payload: CustomerType
}

export type CustomerDispatchType = CustomerLoading | CustomerFail | CustomerSuccess | CustomerPostSuccess
