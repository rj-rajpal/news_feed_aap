import React, { useEffect, useState } from "react";
import { APP_CONSTS } from "../AppConstants";
import { Container, Row, Col, Button } from "reactstrap";
import { TableContainer } from './NewsTable.style'
import axios from "axios";
import NewsArticle from "../NewsArticle/NewsArticle";

const NewsTable = () => {
    const [currPageData, setCurrPageData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const getNewsData = (pageNumber) => {
        axios.get(APP_CONSTS.URLS.GET_RECORD_BY_PAGE.replace('pageNo', pageNumber.toString()))
            .then(response => {
                setCurrPageData(response.data.hits);
                setPageNo(response.data.page);
                setTotalPages(response.data.nbPages)
                setIsDataLoaded(true);
            })
            .catch(
                setIsDataLoaded(false)
            );
    }
    useEffect(() => {
        getNewsData(pageNo)
    }, [])

    const countComments = () => {
        return
    }
    const getNewsTableRow = (id, points) => {
        
        return (
            <Row>
                <Col className="normal-col">{countComments(id)}</Col>
                <Col className="normal-col">{points}</Col>
                <Col className="normal-col"><Button>{'up'}</Button></Col>
                <Col className="news-column"><NewsArticle details={}/></Col>
            </Row>
        )
    }
    return (
        <TableContainer fluid >
            <Row className="header-row">
                <Col className="normal-col">{APP_CONSTS.COMMENTS}</Col>
                <Col className="normal-col">{APP_CONSTS.VOTE_COUNT}</Col>
                <Col className="normal-col">{APP_CONSTS.UPVOTE}</Col>
                <Col className="news-column">{APP_CONSTS.NEWS_DEATILS}</Col>
            </Row>
            {currPageData.length ? currPageData.forEach( hit => {
                return getNewsTableRow(hit)
            }):''}
        </TableContainer>
    )
}

export default NewsTable