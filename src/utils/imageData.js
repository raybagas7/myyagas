const imageDataPokeCard = () => {
  return [
    {
      id: 'main-img-pokecard',
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52677504962_4ea3f192b1_b.jpg',
      link: 'https://www.pokemoncard.my.id',
      about: `<p class='indent-5'>Pokécard is a browser game that is not fully developed yet and will develop over time for fun. 
      Pokécard stands for Pokemon and a card, Player can choose or pick the pokemon card they wanted through the shuffle system, 
      there will be several pokemon appear with random skills when the player presses the shuffle button and they can choose 
      the desired pokemon card. Pokemon come with some rarity from basic type to legendary shiny type pokemon. 
      Players also can trade their cards among the other players or offer the card to other players' cards.</p>
  
      <p class='indent-5'>Future updates will allow players to a duel cards game and players can change their pokemon skill through items also players can level up the card with items</p>`,
      frameworks: [
        {
          backend: [
            'nodejs',
            'javascript',
            'rabbitmq',
            'nodemailer',
            'postgres',
            'hapi',
          ],
        },
        {
          frontend: [
            'reactjs',
            'html',
            'css',
            'tailwind',
            'reacticon',
            'fejavascript',
          ],
        },
        {
          others: ['aws', 'awsec2', 'awsamplify', 'awsrds', 'awsmq'],
        },
      ],
    },
    {
      id: 1,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52677504832_57e54f8625_b.jpg',
    },
    {
      id: 2,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52677504897_7de160cb1d_b.jpg',
    },
    {
      id: 3,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52678453250_29776f0f7d_b.jpg',
    },
    {
      id: 4,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52678015546_c63dca49f9_b.jpg',
    },
  ];
};

const imageDataSimpleNote = () => {
  return [
    {
      id: 'main-img-simplenote',
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52686454575_60093f2b65_b.jpg',
      link: 'https://raybagas7.github.io/simpleNoteApp/',
      frameworks: [
        { backend: ['openapi'] },
        { frontend: ['reactjs', 'html', 'css', 'reacticon', 'fejavascript'] },
        { others: ['githubpages'] },
      ],
      about: `<p class='indent-5'>
      Simplenote is just a simple web application for people to write their notes. Users can add a note, delete and archive it.
      </p>

      <p class='indent-5'>Users also can just use a search feature to find their notes by the title.
      There is 2 kind of display mode. Light mode and Dark mode</p>
      
      <p class='indent-5'>Users also can choose an applications language between English and Indonesian</p>`,
    },
    {
      id: 1,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52678514538_fdb90194fa_b.jpg',
    },
    {
      id: 2,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52686312394_ac78b3af1c_b.jpg',
    },
    {
      id: 3,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52678514563_98f258250d_b.jpg',
    },
    {
      id: 4,
      type: 'website',
      imageUrl:
        'https://live.staticflickr.com/65535/52678015886_a67e5c3360_b.jpg',
    },
  ];
};

const imageDataSmartWater = () => {
  return [
    {
      id: 'main-img-smartwater',
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685474440_625188c407_b.jpg',
      link: null,
      frameworks: [{ developed: ['androidstudio'] }, { others: ['firebase'] }],
    },
    {
      id: 1,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685474610_51a2449b56_b.jpg',
    },
    {
      id: 2,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685050906_e6db748025_b.jpg',
    },
    {
      id: 3,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685332464_4830dd88de_b.jpg',
    },
    {
      id: 4,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685051056_f84347f9a9_b.jpg',
    },
  ];
};

const imageDataDude = () => {
  return [
    {
      id: 'main-img-dude',
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685380659_e81a495280_o.jpg',
      link: null,
      frameworks: [{ developed: ['androidstudio'] }, { others: ['firebase'] }],
    },
    {
      id: 1,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685380814_7101a55699_o.png',
    },
    {
      id: 2,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685522555_85b549dc11_b.jpg',
    },
    {
      id: 3,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685098696_da8c32706b_o.png',
    },
    {
      id: 4,
      type: 'android',
      imageUrl:
        'https://live.staticflickr.com/65535/52685596653_038650f912_o.png',
    },
  ];
};

export {
  imageDataPokeCard,
  imageDataSimpleNote,
  imageDataSmartWater,
  imageDataDude,
};
