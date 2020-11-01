import * as React from "react";

import Section from "../../Molecules/Section";
import TableRow from "../../Molecules/TableRow";

import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";

export interface Props {
  title: string;
  items: IGroupedTableItem[];
}

const GroupedTable = ({ items, title }: Props) => (
  <Section title={title}>
    {items.map((item, index) => (
      <TableRow key={item.id} item={item} index={index} />
    ))}
  </Section>
);

export default GroupedTable;
