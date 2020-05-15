import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";


class TodoApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <TodoAppHeader/>
                <TodoAppList />
                <button>Sil</button>
            </div>
        );
    }
}


export default TodoApp,