import { SectionListData } from "react-native";
import IChatCellItem from "../interfaces/IChatCellItem";
import { format } from "date-fns";

interface ItemSection {
  title: string;
  data: IChatCellItem[];
  id: number;
}

interface Dict {
  [key: string]: ItemSection;
}

const getDateKey = (date: Date) => format(date, "yyyy-MM-dd");

const assembleChatItemSections = (
  items: IChatCellItem[]
): SectionListData<IChatCellItem>[] => {
  const sortedItems = [...items].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
  );

  const dict: Dict = {};

  sortedItems.reverse().forEach((item) => {
    const key = getDateKey(item.createdAt);

    if (!dict[key]) {
      dict[key] = {
        title: "Title",
        data: [item],
        id: item.createdAt.getTime(),
      };
    } else {
      dict[key].data.push(item);
    }
  });

  return Object.values(dict);
};

export default assembleChatItemSections;
