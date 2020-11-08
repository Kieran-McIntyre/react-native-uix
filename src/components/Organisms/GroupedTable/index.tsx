import * as React from "react";
import { Section } from "../../Molecules/Section";
import { TableRow } from "../../Molecules/TableRow";
import { GroupedTableProps } from "./types"

export const GroupedTable: React.FC<GroupedTableProps> = ({ items, title }) => (
  <Section title={title}>
    {items.map((item, index) => (
      <TableRow key={item.id} item={item} index={index} />
    ))}
  </Section>
);
