export class DataManagementService {
    recipes = [
        {
            name: 'Burger',
            chef: 'Ranveer Brar',
            image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
            type: 'non-Veg',
            description: "description"
        },
        {
            name: 'Chicken Maggie',
            chef: 'Nisha Madhulika',
            image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
            type: 'non-Veg',
            description: "description"
        },
        {
            name: 'Veg.Pulav',
            chef: 'Tarla Dalal',
            image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
            type: 'Veg',
            description: "description"
        },
        {
            name: 'Italian Pasta',
            chef: 'JM',
            image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
            type: 'Veg',
            description: "description"
        },
    ];
    addRecipe(name: string, chef: string, image: string, type: string, description: string) {
        this.recipes.push({ name, chef, image, type, description })
    }
    searchRecipe(keyword:string){
        let searched = [];
        this.recipes.forEach((value,index) => {
            if (value.name.search(`([a-zA-z]*${keyword}[a-zA-z]*)+`) != -1) {
                searched.push(value);
            }
        })
        return searched
    }

}