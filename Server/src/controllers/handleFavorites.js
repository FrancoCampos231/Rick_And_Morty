const myFavorite = [];

const postFav = (req, res) => {
    const character = req.body
    myFavorite.push(character)
    return res.status(200).json(myFavorite);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorite = myFavorite.filter((favorite) => {
        favorite.id !== +id
    })
    return res. status(200).json(myFavorite);
}

module.exports = {
    postFav,
    deleteFav
}