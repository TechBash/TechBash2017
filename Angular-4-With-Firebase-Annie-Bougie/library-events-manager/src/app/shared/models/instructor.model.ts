export class Instructor {
    $key: string;
    username: string;
    name: string;
    imageUrl: string;
    phone: string;
    email: string;
    bio: string;
    likes: number;


    static jsonArrayToObjectArray(array) : Instructor[] {
        return array.map(Instructor.jsonToObject);
    }

    static jsonToObject({$key, bio, username, name, imageUrl,
            phone, email, likes}) : Instructor {
        const instructor = new Instructor();
        instructor.$key = $key;
        instructor.name = name;
        instructor.imageUrl = imageUrl;
        instructor.phone = phone;
        instructor.email = email;
        instructor.username = username;
        instructor.bio = bio;
        instructor.likes = likes;
        return instructor;
    }
}