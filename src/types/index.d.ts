export interface IUser {
 name:string,
 email:string,
 password:string
}

export interface Icolor{
  name:string,
  id:string,
  code:string
}

export interface Iicon{
  name:string,
  id:string,
  symbol:string
}
export interface ICategory{
  _id:string
  name:string,
  user:IUser | string,
isEditable:boolean,
color:Icolor
icon:Iicon
}