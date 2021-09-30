import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import React from "react";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          id = {meetup.id}
          name = {meetup.name}
          description = {meetup.description}
          category = {meetup.category}
          image={meetup.image} 
          price = {meetup.price}
          countInStock = {meetup.countInStock}
          brand = {meetup.brand}
          rating = {meetup.rating}
          numReviews = {meetup.numReviews}
          __v = {meetup.__v}
         
        />
      ))}
    </ul>
  );
};

export default MeetupList;
