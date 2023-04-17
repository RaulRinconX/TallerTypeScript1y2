export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;
  
    constructor(
      id: number,
      name: string,
      channel: string,
      seasons: number,
      description: string,
      link: string,
      image: string
    ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.image = image;
    }

    // Getters
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getChannel() {
      return this.channel;
    }
    getSeasons() {
      return this.seasons;
    }
    getDescription() {
      return this.description;
    }
    getLink() {
      return this.link;
    }
    getImage() {
      return this.image;
    }
}
