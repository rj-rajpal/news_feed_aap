import { Button } from "bootstrap";
import React from "react";

const NewsArticle = ({details}) => {
    const {author,created_at, title, url  } = details;
    const getTimeLapsed = (created_at) => {
        const postedAtDate = new Date(created_at);
        const today = new Date(Date.now());
        const timeLapsed =  today - postedAtDate;
        const timeLapsedHours = timeLapsed/(1000*60*60*24);
        return timeLapsedHours;
    }
    return(
        <>
        <div>{title}</div>
        <div>{` (${url})`}</div>
        <div>{` by ${author}`}</div>
        <div>{getTimeLapsed()}</div>
        <div>{" ["}</div>
        <Button>{"hide"}</Button>
        <div>{" ]"}</div>
        </>
    );
}

export default NewsArticle;