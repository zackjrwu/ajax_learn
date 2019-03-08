//  使用 setTimeout 來模擬從網路上抓來的資料
//  模擬接收資料的非同步

/*
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000)
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first();
*/

//  使用 setTimeout 來模擬從網路上抓來的 async 資料
//  模擬接收資料的非同步 es5 or early
//  造成 call back hell

/*
function getRecipe() {

    setTimeout(() => {

        const recipeID = [123, 222, 575, 245];
        console.log(recipeID);

        setTimeout((id) => {

            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Zack'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {

                const recipe2 = {
                    title: 'Pizza',
                    publisher: 'Zack'
                };
                console.log(recipe2);
            
            }, 1500, recipe.publisher);
        
        }, 1000, recipeID[2]);
    
    }, 1500);

}
getRecipe();
*/



//  使用 setTimeout 來模擬從網路上抓來的資料
//  es6 Promise 使用
//  成功的話會作 resolve 的事情
//  失敗的話最作 reject 的事情
//  .then 裡面是保證成功後 resolve (接收完資料後)要對資料作的操作
//  .catch 裡面是失敗後 reject (接收完資料後)要對資料作的操作
const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123, 222, 575, 245]);
    }, 1500);
});
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Zack'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = {
                title: 'Pizza',
                publisher: 'Zack'
            };
            resolve(`${pub}: ${recipe2.title}`);
        }, 1500, publisher);
    });
}

/*
getIds
    //成功後的 call back function
    .then(ids => {
        console.log(ids);
        return getRecipe(ids[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('Jojo');
    })
    .then(recipe => {
        console.log(recipe);
    })
    //失敗後的 call back function
    .catch(error => {
        console.log(error);
    });
*/

var array = [];
async function getRecipeAW() {
    const IDs = await getIds;
    console.log(IDs);
    array.push(IDs[0]);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Mojo');
    console.log(related);
    return recipe;
}
getRecipeAW().then(result => {
    console.log(`${result} is the best ever!`);
});