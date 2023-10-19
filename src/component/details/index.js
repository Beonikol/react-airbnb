import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";
import guest from "./guests.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>
      <ul className="details__list">
        <ListItem imageSrc={guest}>
          <span>{guests} гості</span>
        </ListItem>
        <ListItem imageSrc={bedroom}>
          <span>{bedrooms} спальня</span>
        </ListItem>
        <ListItem imageSrc={bed}>
          <span>{beds} ліжко</span>
        </ListItem>
        <ListItem imageSrc={bath}>
          <span>{baths} ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}
