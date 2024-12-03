export class Message {
    _id: string;
    user_id: string;
    discussion_id: string;
    text: string;
    date: number;
  
    constructor(
    _id: string,
    user_id: string,
    discussion_id: string,
    text: string,
    date: number
    ) {
    this._id = _id;
    this.user_id = user_id;
    this.discussion_id = discussion_id;
    this.text = text;
    this.date = date;
    }
}
