import React from 'react'
import PropTypes from 'prop-types';
import "./DayTodoCard.scss"

DayTodoCard.prototypes = {
    type: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.string,
    isDone: PropTypes.bool,
}

function DayTodoCard(props) {

    let card: JSX.Element;
    
    if (props.type === 'todo') {
        card = <DayCardTodo createdAt={props.createdAt} content={props.content} isDone={props.isDone} />
    } else {
        card = <DayCardNote createdAt={props.createdAt} content={props.content} />
    }

    return card;
}

const DayCardTodo = ({createdAt, content, isDone}) => {
    return <div className="day-card">
        <div className="day-card_checkbox">
            <input type="checkbox" />
        </div>
        <div className="day-card_content">
            <span>{"long texttttttttttttttttttttt"}</span>
        </div>
    </div>
}

const DayCardNote = ({createdAt, content}) => {
    return <div className="day-card">
        <div className="day-card_content">
        <span>{content}</span>
        </div>
    </div>
}

export default DayTodoCard