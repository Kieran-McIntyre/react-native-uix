import IAttachment from "./IAttachment";

interface IChatCellItem {
  id: string;
  message?: string;
  attachments?: IAttachment[];
  createdAt: Date;
}

export default IChatCellItem;
