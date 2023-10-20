import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";

export default function Properties({
  rules,
  policy,
  transportation,
  languages,
  offers,
}) {
  return (
    <Box shadow className="properties">
      <Heading border>Деталі властивості:</Heading>
      <ul className="properties__list">
        <ListItem title="Правила дому">
          <span>{rules}</span>
        </ListItem>
        <ListItem title="Політика скасування">
          <span>{policy}</span>
        </ListItem>
        <ListItem title="Місцевий транспорт">
          <span>{transportation}</span>
        </ListItem>
        <ListItem title="Мови хоста">{languages.join(", ")}</ListItem>
        <ListItem title="Спеціальні пропозиції:">
          <span>{offers}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
