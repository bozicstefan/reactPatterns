import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./components/SearchableList/Place";
const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <Accordion className="accordion">
          <Accordion.Item id="first-article" className={"accordion-item"}>
            <Accordion.Title className="accordion-item-title">
              Octopus travel
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus temporibus consequatur eos eaque aperiam, cupiditate
                  sit eum facilis veritatis labore exercitationem animi corrupti
                  sunt praesentium dolor optio officia, modi qui. Error atque
                  architecto possimus temporibus est quod eveniet, ratione
                  voluptas esse culpa, numquam qui veritatis placeat aspernatur
                  sapiente voluptates, enim assumenda hic nihil adipisci
                  eligendi quis itaque. Eligendi, eos quae.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="second-article" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Munis tours
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus temporibus consequatur eos eaque aperiam, cupiditate
                  sit eum facilis veritatis labore exercitationem animi corrupti
                  sunt praesentium dolor optio officia, modi qui. Error atque
                  architecto possimus temporibus est quod eveniet, ratione
                  voluptas esse culpa, numquam qui veritatis placeat aspernatur
                  sapiente voluptates, enim assumenda hic nihil adipisci
                  eligendi quis itaque. Eligendi, eos quae.
                </p>
              </article>
            </Accordion.Content>
            <article></article>
          </Accordion.Item>
        </Accordion>
      </section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => item}>
        {(item) => item}
      </SearchableList>
    </main>
  );
}

export default App;
