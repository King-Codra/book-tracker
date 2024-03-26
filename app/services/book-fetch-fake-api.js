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
