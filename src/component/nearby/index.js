import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
import ListItem from "../list-item";

export default function Nearby({ list }) {
  return (
    <Box shadow className="nearby__block">
      <Heading border>Пам'ятки поблизу</Heading>

      <div className="nearby__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  if (!link.startsWith("http://") && !link.startsWith("https://")) {
    link = `http://${link}`;
  }
  return (
    <ListItem>
      <a href={link} className="link__name">
        {name}
      </a>
    </ListItem>
  );
}
