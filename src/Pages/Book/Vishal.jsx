import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from "reactstrap";
import CustomSearchTextBox from '../../Components/common/CustomSearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../Services/operations/BookApi';
import { BasicTable } from '../../Components/common/DataTable';
import { columns } from './DataTableColumns';

const Vishal = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState();

    const { Books, isLoading } = useSelector((state) => ({
        Books: state.book.Books,
        isLoading: state.book.loading,
    }));

    const columnNames = [
        {
            Title: 'author_name',
            ValueEn: 'Author Name',
            FieldName: 'NAME',
            selector: (row) => row.author_name
        },
        {
            Title: "title",
            ValueEn: 'Title',
            FieldName: 'Classes',
            selector: (row) => row.title
        },
        {
            Title: "first_publish_year",
            ValueEn: 'First Publish Year',
            FieldName: 'Normal',
            selector: (row) => row.first_publish_year
        },
        {
            Title: "Author Birthdate",
            ValueEn: 'Author Birthdate',
            FieldName: 'Normal',
            selector: (row) => row.CreatedBy
        },
        {
            Title: "Author Top Pick",
            ValueEn: 'Author Top Pick',
            FieldName: 'Normal',
            selector: (row) => row.CreatedAt
        },
        {
            name: 'Action',
            ValueEn: 'Action',
            FieldName: 'Action'
        }
    ];

    console.log('Books: ', Books);

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    useEffect(() => {
        setData(Books?.data?.docs)
    }, [Books])

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>

                    <Row className='mb-3'>

                        <Col>
                            <CustomSearchTextBox initialData={[]} setFinalData={setData} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {isLoading
                                ?
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Spinner style={{
                                        height: '3rem',
                                        width: '3rem',
                                    }} className='me-2'> Loading... </Spinner>
                                </div>
                                : (
                                    <BasicTable
                                        data={data?.length ? data : []}
                                        columns={columns(
                                            columnNames,
                                        )}
                                    />


                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </div>


        </React.Fragment>
    );
}

export default Vishal