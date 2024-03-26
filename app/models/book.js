import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') authors;
  @attr('string') pages;
  @attr('string') releaseDate;
  @attr('string') language;
  @attr('string') description;
  @attr('string') id;
  @attr('string') cover;
  @attr('string') status;
  @attr('string') currentlyReading;
}
