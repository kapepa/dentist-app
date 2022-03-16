export const findUser = (list,_id) => {
  let toUser
  for(let day of list){
    toUser = day.data.find( el => el._id === _id);
    if(toUser) break;
  }
  return toUser
}