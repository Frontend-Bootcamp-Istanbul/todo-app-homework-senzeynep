import React from 'react';
import TodoAppListItem from "./TodoAppListItem";
import {connect} from "react-redux";
import {toggleTodo, deleteTodo} from "../redux/actions";


const TodoAppListItem = ({content, id, completed, toggleTodo, deleteTodo}) => {
    return (
        <div style={{
            textDecoration: completed ? "line-through"
        }} onClick={() =>  toggleTodo(id)}>
            {content}
        <div style={StyleSheet.container}>
            <div style={todoStyle(completed)}
                onClick{() => toggleTodo(id)}>
                <p styles={styles.todoText}>{content}</p>
        </div>
        <button> onClick{() => deleteTodo(id)} style={styles.button}>sil</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer
    }
}


export default connect(mapStateToProps)(TodoAppList);