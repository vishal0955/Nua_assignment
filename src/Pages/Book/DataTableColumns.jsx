import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from "reactstrap";


export const columns = (columnNames, permission, onEditClickHandler, onDeleteClickHandler, onActiveOrDeactiveChange) => {
    return columnNames?.map((column) => {
        let col;
        switch (column?.FieldName) {
            case 'Action':
                return col = {
                    name: <span className='font-weight-bold fs-13'>{column?.ValueEn}</span>,
                    wrap: true,
                    cell: (cell) => {
                        return (
                            <UncontrolledDropdown className="dropdown d-inline-block">
                                <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                                    <i className="ri-more-fill align-middle"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem
                                        className='edit-item-btn'
                                        onClick={(e) => { onEditClickHandler(cell, 'isEdit') }}
                                        disabled={!permission?.CanEdit}
                                    >
                                        <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                        {'Edit'}
                                    </DropdownItem>

                                    {/* <DropdownItem
                                        className='edit-item-btn'
                                        onClick={(e) => { infoHandler(cell, 'isEdit') }}
                                        disabled={!permission?.CanView}
                                    >
                                        <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                        {t('More Info')}
                                    </DropdownItem> */}

                                    <DropdownItem
                                        className='remove-item-btn'
                                        onClick={(e) => { onDeleteClickHandler(cell) }}
                                        disabled={!permission?.CanDelete}
                                    >
                                        <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                        {'Delete'}
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        );
                    },
                };

            case 'Active':
                return col = {
                    name: <span className='font-weight-bold fs-13'>{ column?.ValueEn}</span>,
                    sortable: false,
                    wrap: true,
                    selector: (cell) => {
                        console.log('cell: ', cell);
                        return <div className="form-check form-switch">
                            <input className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onChange={(e) => onActiveOrDeactiveChange(cell, e)}
                                checked={cell?.Status}
                                disabled={!permission.CanEdit}
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                        </div>
                    },
                };

            
               
            default:
                return col = {
                    name: <span className='font-weight-bold fs-13'>{column?.ValueEn}</span>,
                    selector: row => {
                        let value = row[column?.Title];
                        // Trimming logic: Trim the value if its length exceeds a certain threshold
                        const maxLength = 50; // Set the maximum length as needed
                        if (typeof value === 'string' && value.length > maxLength) {
                            value = value.substring(0, maxLength) + '...';
                        }
                        return ['CreatedDate', 'ModifiedDate'].includes(column?.Title) ? new Date(value).toDateString() : value;
                    }
                };
                
        }
    })
}
