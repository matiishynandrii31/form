import React from 'react';

function ListItem(props) {
    return (
        <li key={props.item}>{props.item}</li>
    )
}

export default ListItem;