export function cookingStatus(timeLeft){
    if(timeLeft> 0){
        return 'Not done, please wait.'
    }
    else if(timeLeft===undefined || timeLeft===null){
        return 'You forgot to set the timer.'
    }
    else{
        return 'Lasagna is done.' 
    }
}

export const preparationTime = (layers,count = 2) => {
    return layers.length * count
}

export const quantities = (layers) => {
    const countOfNoodle = layers.filter(item=>item==='noodles').length
    const countOfSauce = layers.filter(item=>item==='sauce').length
    return {noodles: countOfNoodle*50,sauce : countOfSauce*0.2}
}

export const addSecretIngredient = (friendList,myList) => {
    myList.push(friendList[(friendList.length)-1])
}

export const scaleRecipe = (recipe,amount) => {
    const scaledRecipe = {...recipe}
    Object.keys(scaledRecipe).forEach((item)=>{
        scaledRecipe[item] = (scaledRecipe[item]/2)*amount
    })
    if (Object.keys(recipe).length===0){
        return {}
    }else{
        console.log(scaledRecipe)
        return scaledRecipe
    }
}