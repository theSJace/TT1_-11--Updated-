import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../components/ui/Card";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

const MeetUpItem = ({ id, name,  description, category ,price, image, countInStock, brand,
  rating, numReviews, __v}) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        category: category,
        description: description,
        image: image,
        brand: brand,
      });
    }
  }
  return (
    <Card>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.content}>
          <h3>{name}</h3>
          <p><b>${price}</b></p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To favorites'}</button>
        </div>
      </div>
    </Card>
  );
};

export default MeetUpItem;
