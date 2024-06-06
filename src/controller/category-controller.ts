import { Request,Response } from "express";
import Category from "../models/category-model";
import { ICategory } from "../types";
import { AuthRequest } from "../middleware";
import { error } from "console";
import { send } from "process";

export const getAllCategories = async(request:AuthRequest,response:Response) =>{
try{
  const {user} = request
const categories = await Category.find({user:user})
return response.send(categories)
}catch(e){
  console.log("Unable to fetch category error is ",e)
  throw e;
}
}

export const createCategories = async(request:AuthRequest,response:Response) =>{
  try{
    const {color,icon,isEditable,name}:ICategory = request.body
    const {user} = request
    const category = await Category.create({
      color,icon,isEditable,name,user
    })
    
response.send(category)
  }catch(e){
    console.log(e)
    response.send({error:"Something went wrong"})
    throw e;
  }
  }

export const deleteCategory = async(request:AuthRequest,response:Response) =>{
  try{
   
    const {id} = request.params
    await Category.deleteMany({_id:id})
    response.send({message:"Category deleted"})
  }catch(e){
    console.log("Error while deleting category ",e)
    response.send({error:"Something went wrong"})
    throw e;
  }
  }


export const updateCategory = async(request:AuthRequest,response:Response) =>{
  try{
   
   const {_id,color,icon,isEditable,name} :ICategory = request.body
   await Category.updateOne({_id},{
    $set:{
      name,
      color,
      icon,
      isEditable
    }
   })
   response.send({message:"Category edited successfully"})
  }catch(e){
    console.log("Error while updating category ",e)
    response.send({error:"Something went wrong"})
    throw e;
  }
  }