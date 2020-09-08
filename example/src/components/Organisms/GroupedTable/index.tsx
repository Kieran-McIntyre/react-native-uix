import * as React from "react";

import Section from "../../Molecules/Section";
import TableRow from "../../Molecules/TableRow";

import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";

const tableItems: IGroupedTableItem[] = [
  { id: 0, label: "Enquiry", icon: "folder", iconBackgroundColor: "#FB8532" },
  { id: 1, label: "Ongoing", icon: "folder", iconBackgroundColor: "#2188FF" },
  { id: 2, label: "Completed", icon: "folder", iconBackgroundColor: "#34D058" },
  { id: 3, label: "Paid", icon: "folder", iconBackgroundColor: "#8A63D2" },
  { id: 4, label: "Invoiced", icon: "folder", iconBackgroundColor: "#09ADA0" },
];

const GroupedTable = () => (
  <Section title={"Categories"}>{tableItems.map(TableRow)}</Section>
);

export default GroupedTable;
