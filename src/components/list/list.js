import React from 'react';
import "./list.css"
import ListItem from "../listItem/listItem";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            list: ["sleep","eat","walk"],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleList = this.handleList.bind(this)
        this.addItemToTheList = this.addItemToTheList.bind(this)
        this.clearList = this.clearList.bind(this)
    }

    handleChange(e) {
       this.setState({text: e.target.value})
    }


    clearList() {
        this.setState({list: []})
    }

    handleList() {
        return this.state.list.map(function(item) {
            return <ListItem item={item} />
        })
    }

    addItemToTheList() {
        if (this.state.text !== "") {
            this.setState(state => {
                const list = [...state.list, state.text];

                return {
                    list,
                    text: "",
                };
            });
        }
    }

    render() {
        return(
            <div className="list">
                <input
                    placeholder="What I need to do?"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button onClick={this.addItemToTheList}>ADD</button>
                <button onClick={this.clearList}>CLEAR</button>
                <div>
                    <ul>
                        {this.handleList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default List;
