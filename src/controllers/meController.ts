import { Payment } from "@/models/buy";
import { User } from "@/models/user";


interface MeData{
  user:string,
  address:string
}
export const meData = async (userId:string) =>{
    const uData = await User.findOne({ where: { id: userId } });
    return uData
}

export const changeMeData = async (userId:string,data:MeData) =>{

  
    await User.update(
        data,
        {
          where: {
            id: userId,
          },
        },
      );

      return "Data modificada correctamente"
    
}


export const changeMeAddress = async (userId:string,address:string) =>{
    await User.update(
        {address},
        {
          where: {
            id: userId,
          },
        },
      );

      return "Address modificado correctamente"
    
}

export const getMePayments = async () =>{

 const findAllMyPayments = await Payment.findAll()
 console.log(findAllMyPayments);
 
 return findAllMyPayments
}