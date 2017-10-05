export class LibraryEvent {
    $key:string;
    url: string;
    name: string;
    imageUrl: string;
    description: string;

    static jsonArrayToObjects(array): LibraryEvent[] {
        return array.map(LibraryEvent.jsonToObject);
    }

    static jsonToObject({$key, url, name, imageUrl, description}): LibraryEvent {
        const event = new LibraryEvent();
        event.$key = $key;
        event.url = url;
        event.name = name;
        event.imageUrl = imageUrl;
        event.description = description;

        return event;
    }
}