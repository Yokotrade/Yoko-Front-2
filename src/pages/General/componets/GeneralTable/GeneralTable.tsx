import Table, { TableProps } from "ui/Table";

const GeneralTable = (props: Pick<TableProps, "head" | "rows">) => {
  const { head, rows } = props;
  return <Table cellWidth="120px" {...{ head, rows }} />;
};

export default GeneralTable;
