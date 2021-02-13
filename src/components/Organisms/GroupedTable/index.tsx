import * as React from "react";
import { Section } from "../../molecules/Section";
import { TableRow } from "../../molecules/TableRow";
import { GroupedTableProps } from "./types";

export const GroupedTable: React.FC<GroupedTableProps> = ({
  items,
  title,
  ...otherProps
}) => (
  <Section 
    {...otherProps} 
    title={title}
  >
    {items.map((item, index) => (
      <TableRow 
        key={item.id}
        item={item}
        index={index} 
      />
    ))}
  </Section>
);
