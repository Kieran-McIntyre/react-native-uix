export default class BaseModel {
  constructor(obj?: object) {
    if (obj !== undefined) {
      Object.assign(this, obj);
    }
  }
}
