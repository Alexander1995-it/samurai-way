import React from 'react';
import Pagination from "@mui/material/Pagination";

type UsersPaginationType = {
    totalCount: number
    pageSize: number
    handlerCurrentPage: (page: number, seatchName: string) => void
    currentPage: number
    search: string
}

const UsersPagination = (props: UsersPaginationType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const handlerPagination = (page: number) => {
        props.handlerCurrentPage(page, props.search)
    }

    return (
        <div style={{margin: '10px'}}>
            <Pagination variant="outlined" color="primary"
                        count={pagesCount} page={props.currentPage}
                        onChange={(e, page) => handlerPagination(page)}/>
        </div>
    );
};

export default UsersPagination;