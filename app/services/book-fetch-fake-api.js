import Service from '@ember/service';

const testBooks = {
  monaLisaOverdrive: {
    authors: 'William Gibson',
    pages: 350,
    releaseDate: 2000,
    language: 'en',
    title: 'Mona Lisa Overdrive',
    cover: '/imgs/mona-lisa-overdrive.jpg',
    isbn: 9780553281743,
    description: 'The third book in the Sprawl series, by William Gibson',
    type: 'Paperback',
    id: 1,
  },

  androids: {
    authors: 'Philip K. Dick',
    pages: 210,
    releaseDate: 2000,
    language: 'en',
    title: 'Do Androids Dream of Electric Sheep',
    cover: '/imgs/androids.jpg',
    isbn: 9780451038005,
    description:
      'A blade runner is an agent tasked with finding and retiring replicants',
    type: 'E-book',
    id: 2,
  },

  fellowship: {
    authors: 'J.R.R. Tolkien',
    pages: 407,
    releaseDate: 2000,
    language: 'en',
    title: 'The Fellowship of the Ring (Lord of the Rings Vol.1)',
    cover: '/imgs/fellowship.jpg',
    isbn: 9780008567125,
    description:
      'In a sleepy village in the Shire, a young hobbit is entrusted with an immense task. He must make a perilous journey across Middle-Earth to the Cracks of Doom, there to destroy the Ruling Ring of Power - the only thing that prevents the Dark Lords evil dominion',
    type: 'Hardcover',
    id: 3,
  },

  sharpObjects: {
    authors: 'Gillian Flynn',
    pages: '328',
    releaseDate: 2010,
    language: 'en',
    title: 'Sharp Objects',
    cover: '/imgs/sharpObjects.jpg',
    isbn: 9780753822210,
    description: `A young newsreporter returns to the small town in which she grew up to cover two murders`,
    type: 'paperback',
    id: 4,
  },

  countZero: {
    authors: 'William Gibson',
    pages: '308',
    releaseDate: 1986,
    language: 'en',
    title: 'Count Zero',
    cover: '/imgs/countzero.jpg',
    isbn: 9780441013678,
    description: `A corporate mercenary wakes in a reconstructed body, a beautiful woman by his side. Then Hosaka Corpor..`,
    type: 'Paperback',
    id: 5,
  },

  neuromancer: {
    authors: 'William Gibson',
    pages: '297',
    releaseDate: 1984,
    language: 'en',
    title: 'Neuromancer',
    cover: '/imgs/neuromancer.jpg',
    isbn: 9781473217386,
    description: `"The sky above the port was the colour of television, tuned to a dead channel."
    William Gibson revolutionised science fiction in his 1984 debut Neuromancer. The writer who gave us the matrix and coined the term 'cyberspace' produced a first novel that won`,
    type: 'Paperback',
    id: 6,
  },

  historyOfBigfoot: {
    authors: `John O'Connor`,
    pages: '304',
    releaseDate: 2024,
    language: 'en',
    title: 'The Secret History of Bigfoot',
    cover: '/imgs/historyOfBigfoot.jpg',
    isbn: 9781464216633,
    description: `From the shrouded forests of the Pacific Northwest to off-the-wall cryptozoological conventions, one man searches high and low for the answer to the real or not, why do we want to believe?
    Journa.`,
    type: 'Hardcover',
    id: 7,
  },

  frankenstein: {
    authors: 'Mary Shelly',
    pages: '224',
    releaseDate: 1818,
    language: 'en',
    title: 'Frankenstein',
    cover: '/imgs/frankenstein.jpg',
    isbn: 9781840228342,
    description: `A scientist finds a way to animate a figure consisting of different dead bodies`,
    type: 'Hardcover',
    id: 8,
  },

  dasKapital: {
    authors: 'Karl Marx',
    pages: '1167',
    releaseDate: 1867,
    language: 'en',
    title: 'Capital',
    cover: '/imgs/capital.jpg',
    isbn: 9780140445688,
    description: `Capital, one of Marx's major and most influential works, was the product of thirty years close study of the capitalist mode of prod`,
    type: 'Paperback',
    id: 9,
  },

  warAndPeace: {
    authors: 'Leo Tolstoy',
    pages: '1273',
    releaseDate: 1868,
    language: 'en',
    title: 'War and Peace',
    cover: '/imgs/warAndPeace.jpg',
    isbn: 9780307266934,
    description: `War and Peace centers broadly on Napoleon's invasion of Russia in 1812 and follows three of the best-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning f.`,
    type: `Hardcover`,
    id: 10,
  },

  crimeAndPunishment: {
    authors: 'Fyodor Dostoevsky',
    pages: '656',
    releaseDate: 1866,
    language: 'en',
    title: 'Crime and Punishment',
    cover: '/imgs/crimeAndPunishment.jpg',
    isbn: 9780140449136,
    description: `Raskolnikov, a destitute and desperate former student, wand.`,
    type: 'Paperback',
    id: 11,
  },

  theManWhoDiedTwice: {
    authors: 'Richard Osman',
    pages: '420',
    releaseDate: 2022,
    language: 'en',
    title: 'The Man Who Died Twice',
    cover: '/imgs/thursdaymurder2.jpg',
    isbn: 9780241988244,
    description: `It's the following Thursday.
    Elizabeth has received a letter from an old colleague, a man with whom she has a long history. He's made a big mistake, and he needs her help.`,
    type: 'Paperback',
    id: 12,
  },

  theThursdayMurderClub: {
    authors: 'Richard Osman',
    pages: '384',
    releaseDate: 2021,
    language: 'en',
    title: 'The Thursday Murder Club',
    cover: '/imgs/thursdaymurder1.jpg',
    isbn: 9781984880987,
    description: `In a peaceful retirement village, four unlikely friends meet up once a week to investigate unsolved murders.
    But when a brutal killing takes place on their very doorstep, the Thursday Murder Club find themselves in the middle of their first live case. Elizabeth, Joyce, Ibrahim and Ron might be pushing eighty but they still have a few tricks up their sleeves.
    Can our unorthodox but brilliant gang catch the killer before it's too late?`,
    type: 'Paperback',
    id: 13,
  },

  theBulletThatMissed: {
    authors: 'Richard Osman',
    pages: '413',
    releaseDate: 2022,
    language: 'en',
    title: 'The Bullet That Missed',
    cover: '/imgs/thursdaymurder3.jpg',
    isbn: 9780241512425,
    description: `One Thursday afternoon in the seniors' center, a decade-old cold case --their favorite kind-- leads the Thursday Murder Club to a local news legend and a murder with no body and no answers. A new foe they call "Viking", wants Elizabeth to kill former KGB chief Viktor, or he will kill her sweet best friend Joyce. Activist marked for death Ron and psychiatrist Ibrahim chase clues for Viking's identity, and investigate mob-queen prisoner from last book.
    This third adventure ranges from a prison cell with espresso machine to a luxury penthouse with swimming pool high in the sky.`,
    type: 'Hardcover',
    id: 14,
  },
};

export default class FakeAPICall extends Service {
  async testFetch(searchQuery) {
    let searchResults = [];
    Object.values(testBooks).forEach((book) => {
      if (
        Object.values(book).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase()),
        )
      ) {
        searchResults.push(book);
      }
    });

    if (searchResults.length === 0) {
      console.log('No test book found for this query:', searchQuery);
      return [];
    }

    console.log('Search results:', searchResults);
    return searchResults;
  }
}
