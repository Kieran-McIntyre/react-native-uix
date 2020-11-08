import BaseModel from "./BaseModel";
import { formatBytes } from "../utils/formatBytes";

export default class Attachment extends BaseModel {
  id!: string;
  name!: string;
  mime?: string;
  size?: number;
  url?: string | Promise<string>;
  isUploading?: boolean;
  createdAt!: Date;

  static IMAGE_MIMES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/tiff",
    "image/bmp",
  ];

  get isImageType() {
    return Attachment.IMAGE_MIMES.includes(this.mime!);
  }

  get isPdfType() {
    return this.mime && this.mime === "application/pdf";
  }

  get formattedSize() {
    const size = this.size ?? 0;
    return formatBytes(size);
  }
}
