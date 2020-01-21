export class FavouriteHomeManagerService {
    recipes = [
        {
            id: 1,
            name: 'Burger',
            chef: 'Ranveer Brar',
            image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
            type: 'non-Veg',
            description: "A veggie burger is a burger patty that does not contain meat or any such kind of meat."
        },
        {
            id: 2,
            name: 'Chicken Maggie',
            chef: 'Nisha Madhulika',
            image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
            type: 'non-Veg',
            description: "A big bowl of Chicken Fried Rice never lets you down, because it is tasty, healthy and super-quick to put together!"
        },
        {
            id: 3,
            name: 'Veg.Pulav',
            chef: 'Tarla Dalal',
            image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
            type: 'Veg',
            description: "Pilaf, or pilau is a rice dish, or in some regions, a wheat dish, whose recipe usually involves cooking in stock or broth, adding spices, and other ingredients such as vegetables or meat, and employing some technique for achieving cooked grains that do not adhere."
        },

    ];
    addFavouriteRecipe(id : number ,name: string, chef: string, image: string, type: string, description: string) {
        if(this.recipes.length!=0){
            id=this.recipes.length+1;
            this.recipes.push({id, name, chef, image, type, description })
        }else{
            this.recipes.push({id, name, chef, image, type, description })
        }
        
    }
    searchFavouriteRecipe(keyword:string){
        let searched = [];
        this.recipes.forEach((value,index) => {
            if (value.name.search(`([a-zA-z]*${keyword}[a-zA-z]*)+`) != -1) {
                searched.push(value);
            }
        })
        return searched
    }

    getFavouriteRecipe(byId: number) {
        return this.recipes[byId];
      }

}