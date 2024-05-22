import DataTable from "react-data-table-component";

const BasicTable = ({ title, data, columns }) => {
    return (
        <DataTable
            title={title}
            columns={columns}
            data={data}
            responsive

            pagination={{
                enabled: true,
                defaultPage: 1,
                defaultRowsPerPage: 10,
                rowsPerPageOptions: [10,50, 100],
            }}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 50, 100]}
            highlightOnHover
            striped

        />
    );
};

export {BasicTable};