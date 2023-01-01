import { Box, Container, Grid, Typography } from "@mui/material";
import { ProductType } from "../../@type/productType";
import Product from "./Product";
const TopSelling = () => {
  const listSellingProduct: ProductType[] = [
    {
      name: "Cyberpunk 2077",
      surname: "cyberpunk",
      price: "59.99",
      desc: "Cyberpunk 2077 is a continuation of the events of Cyberpunk 2020, taking an alternate path to that of Cyberpunk V3.0. The game is set in the dystopian metropolis of Night City. It is set in the Free State of Northern California. Night City is located south of San Francisco around the area of Morro Bay, CA. During Cyberpunk 2020, Night City is said to have a population of more than five million inhabitants. However, this number is suspected to be considerably larger in 2077. Following an economic collapse sometime during the early 21st century, the United States is forced to rely on large corporations to survive. These corporations deal in a wide range of areas, such as weapons, robotics, cybernetics, pharmaceuticals, communications, and biotechnology; many of these companies operate above the law. The game follows the story of V — a hired gun on the rise in Night City, the most violent and dangerous metropolis of the corporate-ruled future. A robust character creator will allow players to choose Vs gender, visual appearance, as well as historical background — all of which may influence the shape of the game. The world is inspired by the works of authors such as William Gibson (author of Neuromancer) and Phillip K Dick, whose novel Do Androids Dream of Electric Sheep? and subsequent movie adaption Blade Runner heavily influenced the creator, Mike Pondsmith, in creating the original tabletop RPG.",
      link: "https://www.cyberpunk.net/",
      release: "10th of December, 2020",
      platforms: "Playstation 4, PC, Xbox Series S/X, Playstation 5, Xbox One",
      genre: "RPG",
      developers: "CD PROJECT RED, CD PROJECT",
      publishers: "CD PROJECT RED",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 78,
      id: 0,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188604/cyberpunk_n6jitl.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188604/cyberpunk_n6jitl.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235373/cyberpunk_1_s00vwf.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235372/cyberpunk_2_mq46xm.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658235378/cyberpunk_3_fajdmi.jpg",
      ],
    },
    {
      name: "Battlefield V",
      surname: "battlefield",
      price: "29.99",
      desc: "The Battlefield series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet.",
      link: "https://www.origin.com/store/battlefield/battlefield-v",
      release: "9th of November, 2018",
      platforms: "Playstation 4, PC, Xbox Series S/X, Xbox One",
      genre: "Shooter",
      developers: "EA Digital Illusions CE",
      publishers: "Electronic Arts",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 71,
      id: 1,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188621/battlefield_n0gd5a.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188621/battlefield_n0gd5a.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658235437/battlefield_1_jpudhq.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658235437/battlefield_3_zy9ewv.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658235438/battlefield_2_txs230.jpg",
      ],
    },
    {
      name: "Life is Strange",
      surname: "lis",
      price: "14.99",
      desc: "Life Is Strange is a five-part episodic game that sets out to revolutionize story-based choice and consequence games by allowing the player to rewind time and affect the past, present, and future. You are Max, a photography senior who saves her old friend Chloe by discovering she can rewind time. The pair soon find themselves exposed to the darker side of Arcadia Bay as they uncover the disturbing truth behind the sudden disappearance of a fellow student. Meanwhile, Max begins to have premonitions as she struggles to understand the implications of her power. She must quickly learn that changing the past can sometimes lead to a devastating future.",
      link: "https://lifeisstrange.square-enix-games.com/",
      release: "30th of January, 2015",
      platforms: "Playstation 4, PC, Xbox One, Xbox 360, Playstation 3",
      genre: "Adventure",
      developers: "Dontnod Entertainment",
      publishers: "Square Enix",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 83,
      id: 2,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188606/lis_ft0puo.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188606/lis_ft0puo.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236055/lis_1_rkrxt5.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236272/lis_2_dcrdwz.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236055/lis_3_komskf.jpg",
      ],
    },
    {
      name: "Mario Kart 8: Deluxe",
      surname: "mariokart",
      price: "24.99",
      desc: "Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!",
      link: "https://mariokart8deluxe.nintendo.com/",
      release: "28th of April, 2017",
      platforms: "Nintendo Switch",
      genre: "Racing",
      developers: "Nintendo EAD",
      publishers: "Nintendo",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 84,
      id: 3,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658232678/mariokart_0_mhgbeg.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658232678/mariokart_0_mhgbeg.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658236315/mariokart_1_heekfq.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658236316/mariokart_3_yzhdje.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236315/mariokart_2_peeyho.jpg",
      ],
    },
    {
      name: "BioShock Infinite",
      surname: "bioshockinfinite",
      price: "18.99",
      desc: "This first-person story-driven shooter and entry in the Bioshock franchise follows Booker DeWitt as he enters the floating independent (formerly US) city of Columbia in 1912 and attempts to retrieve a girl trapped in a tower by the citys self-proclaimed despot/prophet in order to erase his financial debt. Throughout the story, themes of violence, racism and fatalism are brought up. Viewer & User Discretion is advised.",
      link: "https://2k.com/en-US/game/bioshock-infinite/",
      release: "26th of February, 2013",
      platforms:
        "Xbox One, PlayStation 4, Linux, Xbox 360, PC, Nintendo Switch, PlayStation 3",
      genre: "Puzzle",
      developers: "Irrational Games",
      publishers: "2K Games",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 86,
      id: 4,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188602/bioshockinfinite_qyo3pi.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188602/bioshockinfinite_qyo3pi.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236359/bioshockinfinite_1_vutin0.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236360/bioshockinfinite_2_bphusb.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236361/bioshockinfinite_3_v1ckvh.jpg",
      ],
    },
    {
      name: "Anno: 1800",
      surname: "anno",
      price: "12.99",
      desc: "Anno 1800 takes place in the 19th century at the dawn of the Industrial Age. Like other Anno games, Anno 1800 is a city-building and strategy game. While it is set in the context of colonial trade, the featured architecture is Victorian Era and the economic engine is factory labor. The core gameplay of Anno 1800 takes place in the Old World, where the needs of the citizens, workers and artisans are central to the management of production and supply chains. A parallel New World city exists, which produces products that laborers in the Old World want to purchase, thus trade routes need to be established. Unlike its colonial 18th century predecessor Anno 1701, the game has a blueprint feature that helps the player to plan out the city.",
      link: "https://anno-union.com/",
      release: "16th of April, 2019",
      platforms: "PC (Microsoft Windows)",
      genre: "Strategy",
      developers: "Blue Byte",
      publishers: "Ubisoft",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 81,
      id: 5,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188622/anno_cbmzye.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658188622/anno_cbmzye.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236405/anno_1_bpil6t.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658236405/anno_2_udh5ep.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236405/anno_3_hoqcp0.jpg",
      ],
    },
    {
      name: "Red Dead Redemption 2",
      surname: "rdr",
      price: "34.99",
      desc: "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
      link: "https://www.rockstargames.com/reddeadredemption2",
      release: "26th of October, 2018",
      platforms: "Xbox One, PlayStation 4, PC, Google Stadia",
      genre: "RPG",
      developers: "Rockstar Studios",
      publishers: "Rockstar Games",
      inCart: false,
      selected: false,
      isHovered: false,
      isLiked: false,
      rating: 92,
      id: 6,
      cover:
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_500/v1658188613/rdr_fhqs3d.jpg",
      footage: [
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,w_1920/v1658188613/rdr_fhqs3d.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236494/rdr_3_euhfwh.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/c_scale,q_100,w_1920/v1658236495/rdr_2_aodums.jpg",
        "https://res.cloudinary.com/gianlucajahn/image/upload/v1658236494/rdr_1_v6xhov.jpg",
      ],
    },
  ];
  return (
    <Box mt={5} mb={15}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: "20px", fontWeight: "900", mb: "18px" }}
        >
          BROWSE TOP SELLING PRODUCTS
        </Typography>
        <Grid container spacing={2}>
          {listSellingProduct.map((item, id) => {
            return (
              <Grid key={id} item xs={6} md={4} xl={3}>
                <Product name={item.name} img={item.cover} price={item.price} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
export default TopSelling;
