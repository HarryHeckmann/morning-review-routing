const foods = [
    {
        name: 'Bratwurst',
        image: 'https://www.movingto-germany.com/wp-content/uploads/2015/10/Bratwurst.jpg',
        id: '1',
        category: 'German'
    },
    {
        name: 'Wienerschnitzel',
        image: 'https://www.movingto-germany.com/wp-content/uploads/2018/10/Wiener-Schnitzel-KaDeWe.jpg',
        id: '2',
        category: 'German'
    },
    {
        name: 'Bratkartoffeln',
        image: 'https://www.movingto-germany.com/wp-content/uploads/2015/10/Bratkartoffeln.jpg',
        id: '3',
        category: 'German'
    },
    {
        name: 'Tacos',
        image: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/1519665233/slow-cooker-carnitas-tacos-ck-1804p38.jpg?itok=X5_Z8Vf0',
        id: '4',
        category: 'Mexican'
    },
    {
        name: 'Chilaquiles',
        image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--424772_11.jpg?itok=L6Pdj8Wg',
        id: '5',
        category: 'Mexican'
    },
    {
        name: 'Mole',
        image: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/chicken-mole.jpg',
        id: '6',
        category: 'Mexican'
    }
]

module.exports = {
    getFoods(req, res){
        const category = req.params.category
        let foodList = foods.filter(e => e.category == category)
        res.json(foodList)
    },
    getFood(req, res){
        const id = req.params.id
        const index = foods.findIndex(item => item.id == id)
        res.json(foods[index])
    }
    
}

