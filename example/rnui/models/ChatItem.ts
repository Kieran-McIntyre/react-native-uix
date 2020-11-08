import BaseModel from "./BaseModel";
import Author from "./Author";
import Attachment from "./Attachment";
import IChatCellItem from "../interfaces/IChatCellItem";

export default class ChatItem extends BaseModel {
  id!: string;
  message?: string;
  attachments: Attachment[];
  createdAt!: Date;

  constructor(item: IChatCellItem) {
    super(item);

    const attachments = item.attachments ?? []

    this.attachments = attachments.map(
      (attachment) => new Attachment(attachment)
    );
  }

  get hasFiles() {
    return this.attachments && this.attachments.length > 0;
  }

  get attachedImages() {
    if (!this.attachments) {
      return [];
    }

    return this.attachments.filter((file) => file.isImageType);
  }

  get attachedFiles() {
    return this.attachments.filter((file) => !file.isImageType);
  }

  get hasAttachedImages() {
    return this.attachedImages.length > 0;
  }

  get hasAttachedFiles() {
    return this.attachedFiles.length > 0;
  }

  get hasTextContent() {
    return !!this.message && this.message.length > 0;
  }

  get hasContent() {
    return this.hasFiles || this.hasTextContent;
  }
}
