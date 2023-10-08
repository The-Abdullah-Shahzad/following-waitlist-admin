export const Main = 'https://following-backend-prod-5a60f5d0c64e.herokuapp.com/'
export const LOGIN = Main + 'admin/login'
export const GET_USERS = Main + 'admin/getAllInfluencers'
export const GET_USER = Main + 'admin/getAllInfluencers/'
export const DELETE_USER = Main + 'admin/deleteUser'
export const APPROVE_USER = Main + 'admin/approveUser'
export const GET_USERS_PROD = page =>
  Main + `admin/getAllInfluencers?page=${page}&per_page=100`
