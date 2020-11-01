import * as React from "react";

import Section from "../../Molecules/Section";
import TableRow from "../../Molecules/TableRow";

import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";

export interface Props {
  items: IGroupedTableItem[];
}

const GroupedTable = ({ items }: Props) => (
  <Section title={"Categories"}>{items.map(TableRow)}</Section>
);

export default GroupedTable;
