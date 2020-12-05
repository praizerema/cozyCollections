import ProductAOne from "../../assests/images/kidsclothesimg/images (2).jpeg";
import ProductATwo from "../../assests/images/kidsclothesimg/images (3).jpeg";
import ProductAThree from "../../assests/images/kidsclothesimg/images (1).jpeg";
import ProductAFour from "../../assests/images/kidsclothesimg/images (4).jpeg";
import ProductAFive from "../../assests/images/kidsclothesimg/images.jpeg";
import ProductASix from "../../assests/images/kidsclothesimg/kids-t-shirt-500x500.jpeg";
import ProductASeven from "../../assests/images/kidsclothesimg/s-l300.jpg";
import ProductAEight from "../../assests/images/kidsclothesimg/s-l500.jpg";
import ProductANine from "../../assests/images/kidsclothesimg/kids-wear02.jpg";
import ProductATen from "../../assests/images/kidsclothesimg/wholesale-children-clothing-sets-fall-girl-long.jpg_350x350.jpg";
import ProductAEleven from "../../assests/images/kidsclothesimg/designer-kids-wears-500x500.jpeg";
import ProductATwelve from "../../assests/images/kidsclothesimg/2018-Wholesale-Girls-Print-Windproof-Jacket-with-Detachable-Hood-Kids-Wears-Windproof-Parka.jpg";
import { ADD_TO_CART, REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_USER_DATA} from "../actions/action-types/cart-actions"


const initState= {
    items: [
        {id: "1", title:"kids(top & bottom)", desc: "Childeren within the the age bracket of four and five years old should wear this", price: 2500, img: ProductAOne},
        {id: "2", title:"Babies(top & bottom)", desc: "These are very good design and fabric for babies", price: 5500, img: ProductATwo},
        {id: "3", title:"Baby wear", desc: "Ideal for babies. Good fabric reteirererue eertertjerejrht jjkjddkgkjd dgggjdgkdgkdjgd sjskssdssjksdfs", price: 2900, img: ProductAThree},
        {id: "4", title:"top & bottom", desc: "Good product, great pricee", price: 3300, img: ProductAFour},
        {id: "5", title:"Pleated gown", desc: "These are for your female childeren between four and five", price: 2800, img: ProductAFive},
        {id: "6", title:"kids(Shirt & Shorts)", desc: "Unisex for kids between four and five kfjdgjkfdkjdf gdfkjgdkkjdgkjdg gdfjgkdgkdkgj dgfjgkdgdf sskjsfs fkfkjkd slsfsdlskf lgggsdgdsk", price: 2600, img: ProductASix},
        {id: "7", title:"Fitted Teens gown", desc: "Elastic for girls between thirteen and fifteen", price: 2000, img: ProductASeven},
        {id: "8", title:"Peplum gowns", desc: "Nice and free not suitable for kids above Ten", price: 3000, img: ProductAEight},
        {id: "9", title:"Baloon gowns", desc: "Nice for the season Age bracket ten and Twelve httrituruitritr dfotrtrotritroissddkkjdds", price: 3500, img: ProductANine},
        {id: "10", title:"babies(complete)", desc: "Childeren within the the age bracket of three and four years old should wear this", price: 1500, img: ProductATen},
        {id: "11", title:"kids(top & pant)", desc: "Childeren within the the age bracket of two and three years old should wear this", price: 4500, img: ProductAEleven},
        {id: "12", title:"Jacket", desc: "Available in all sizes and colors", price: 7500, img: ProductATwelve},
    ],
    addedItems:[],
    total: 0
}
const cartReducer= (state = initState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:{
            let addedItem = state.items.find(item=> item.id === action.id)
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action.id === item.id)
           if(existed_item)
           {
              addedItem.quantity += 1 
               return{
                  ...state,
                   total: state.total + addedItem.price 
                    }
          }
           else{
              addedItem.quantity = 1;
              //calculating the total
              let newTotal = state.total + addedItem.price 
              
              return{
                  ...state,
                  addedItems: [...state.addedItems, addedItem],
                  total : newTotal
              }
              
          }
        }
        case REMOVE_ITEM:{
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            console.log(itemToRemove)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        case ADD_QUANTITY:{
            let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
        }
        case SUB_QUANTITY:{
            let addedItem = state.items.find(item=> item.id === action.id) 
                //if the qt == 0 then it should be removed
                if(addedItem.quantity === 1){
                    let new_items = state.addedItems.filter(item=>item.id !== action.id)
                    let newTotal = state.total - addedItem.price
                    return{
                        ...state,
                        addedItems: new_items,
                        total: newTotal
                    }
                }
                else {
                    addedItem.quantity -= 1
                    let newTotal = state.total - addedItem.price
                    return{
                        ...state,
                        total: newTotal
                    }
                }


    }
    case ADD_USER_DATA:{
        console.log(action.data)
        return{
            ...state,
            user_data: action.data
        }
    }
    default:
}
    // //INSIDE HOME COMPONENT
    // if(action.type === ADD_TO_CART){
    //       let addedItem = state.items.find(item=> item.id === action.id)
    //       //check if the action id exists in the addedItems
    //      let existed_item= state.addedItems.find(item=> action.id === item.id)
    //      if(existed_item)
    //      {
    //         addedItem.quantity += 1 
    //          return{
    //             ...state,
    //              total: state.total + addedItem.price 
    //               }
    //     }
    //      else{
    //         addedItem.quantity = 1;
    //         //calculating the total
    //         let newTotal = state.total + addedItem.price 
            
    //         return{
    //             ...state,
    //             addedItems: [...state.addedItems, addedItem],
    //             total : newTotal
    //         }
            
    //     }
    // }
  
    // // if(action.type === REMOVE_ITEM){
    // //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    // //     let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
    // //     //calculating the total
    // //     let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    // //     console.log(itemToRemove)
    // //     return{
    // //         ...state,
    // //         addedItems: new_items,
    // //         total: newTotal
    // //     }
    // // }
    // //INSIDE CART COMPONENT
    // if(action.type=== ADD_QUANTITY){
    //     let addedItem = state.items.find(item=> item.id === action.id)
    //       addedItem.quantity += 1 
    //       let newTotal = state.total + addedItem.price
    //       return{
    //           ...state,
    //           total: newTotal
    //       }
    // }
    // if(action.type=== SUB_QUANTITY){  
    //     let addedItem = state.items.find(item=> item.id === action.id) 
    //     //if the qt == 0 then it should be removed
    //     if(addedItem.quantity === 1){
    //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             addedItems: new_items,
    //             total: newTotal
    //         }
    //     }
    //     else {
    //         addedItem.quantity -= 1
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             total: newTotal
    //         }
    //     }
        
    // }
    // if(action.type === REMOVE_ITEM){
    //     let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    //     let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
    //     //calculating the total
    //     let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    //     console.log(itemToRemove)
    //     return{
    //         ...state,
    //         addedItems: new_items,
    //         total: newTotal
    //     }
    // }
    // //INSIDE CART COMPONENT
    // if(action.type=== ADD_QUANTITY){
    //     let addedItem = state.items.find(item=> item.id === action.id)
    //       addedItem.quantity += 1 
    //       let newTotal = state.total + addedItem.price
    //       return{
    //           ...state,
    //           total: newTotal
    //       }
    // }
    // if(action.type=== SUB_QUANTITY){  
    //     let addedItem = state.items.find(item=> item.id === action.id) 
    //     //if the qt == 0 then it should be removed
    //     if(addedItem.quantity === 1){
    //         let new_items = state.addedItems.filter(item=>item.id !== action.id)
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             addedItems: new_items,
    //             total: newTotal
    //         }
    //     }
    //     else {
    //         addedItem.quantity -= 1
    //         let newTotal = state.total - addedItem.price
    //         return{
    //             ...state,
    //             total: newTotal
    //         }
    //     }
        
    // }
    return state
}

export default cartReducer;
    // let new_items = state.addedItems.filter(item => data.id !== item.id && data.id !== item.cart);
