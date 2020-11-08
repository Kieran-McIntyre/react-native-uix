interface IAttachment {
  id: string;
  name: string;
  mime?: string;
  size?: number;
  url?: string | Promise<string>;
  isUploading?: boolean;
  createdAt: Date;
}

export default IAttachment;
