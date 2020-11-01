import BaseModel from "./BaseModel";

export default class Author extends BaseModel {
  firstName?: string;
  lastName?: string;

  get fullName() {
    return [this.firstName, this.lastName].filter(Boolean).join(" ");
  }
}
