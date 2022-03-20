import React, { useState } from "react";

const UsersPaginator = (props) => {
    let a = props.totalCount;
    

    if (a > 300) {
        a = 300;
    }

    let pagesCount = Math.ceil(a / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    ;

    let portionCount = Math.ceil(pagesCount / 10);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortion = (portionNumber - 1) * 10 + 1;
    let rightPortion = portionNumber * 10;

    return <div className="pages">
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}> Prev</button>
        }
        {pages
            .filter(p => p >= leftPortion && p <= rightPortion)
            .map(p => {
                return <span className={p === props.currentPage ? 'selectedPage' : 'nullPage'}
                    key={p}
                    onClick={() => props.onPageChanged(p)}>{p}</span>

            })}
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}> Next</button>
        }
    </div>
}

export default UsersPaginator;  