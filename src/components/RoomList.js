import React, { Component } from 'react'


class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        this.props.room.on('child_added', snapshot => {
            const room = snapshot.val()
            room.key = snapshot.key
            this.setState({
                rooms: this.state.rooms.concat(room)
            })
        })
    }

    render() {
        return (
            <ul className='container-fluid'>
                {this.state.rooms.map(room =>
                    <li className='col-md-3 text-left'>{room}</li>
                )}
            </ul>
        )
    }
}

export default RoomList
