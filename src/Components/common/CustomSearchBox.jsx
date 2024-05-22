import React from 'react';
import { Input } from "reactstrap";
import { useTranslation } from 'react-i18next';


const CustomSearchTextBox = ({ initialData, filter = "", setFinalData, id = "search-options" }) => {
    const { t, i18n } = useTranslation()
    const onChangeData = (value) => {
        if (value === "") {
            setFinalData(initialData)
        } else if (value !== "" && filter !== "") {
            setFinalData(initialData.filter((item) => {
                let obj = { [filter]: item[filter] } 
                return Object.values(obj).map((entry) => entry?.toString().toLowerCase()).find((v) => v?.substring(0, value?.length) === (value?.toString().toLowerCase()));
            }))
        } else {
            setFinalData(initialData.filter((item) => {
                return Object.values(item).map((entry) => entry?.toString().toLowerCase()).find((v) => v?.substring(0, value?.length) === (value?.toString().toLowerCase()));
            })) 
        }
    }       
         

    return (
        <React.Fragment>
            <Input type="text" className={i18n.language === 'ar' ? 'form-control float-start mw-400' : 'form-control float-end mw-400'} placeholder={t('Search') + '...'}
                id={id}
                onChange={(e) => onChangeData(e.target.value)} />
        </React.Fragment>
    )
}


export default CustomSearchTextBox;