export const GUEST_LOADING = 'GUEST_LOADING'
export const GUEST_FAIL = 'GUEST_FAIL'
export const GUEST_SUCCESS = 'GUEST_SUCCESS'

export type GuestType = {
  address: string
  telephone: string
  user_name: string
  your_name: string
  // guest_ability?: GuestAbility[]
  // guest_sprites?: GuestSprites
}
export type GuestAbility = {
  ability: {
    name: string
    url: string
  }
}
export type GuestSprites = {
  front_default: string
}

export interface GuestLoading {
  type: typeof GUEST_LOADING
}

export interface GuestFail {
  type: typeof GUEST_FAIL
}

export interface GuestSuccess {
  type: typeof GUEST_SUCCESS
  payload: Array<GuestType>
}

export type GuestDispatchType = GuestLoading | GuestFail | GuestSuccess
