import React, { Component } from 'react'
import '../RoomList.css'

class RoomList extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: [],
            value: ''
        }

        this.roomsRef = this.props.firebase.database().ref('rooms')
        this.createRoom = this.createRoom.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val()
            room.key = snapshot.key
            this.setState({
                rooms: this.state.rooms.concat(room)
            })
        })
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    createRoom(e) {
        e.preventDefault()
        this.roomsRef.push({
            name: this.state.value
        })
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="room-list">
                <div className="row">
                    <form className="col-md-3" onSubmit={this.createRoom}>
                        <label>Room Name:</label>
                        <input type="text" id="input" value={this.state.value} onChange={this.handleChange}/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="row">
                    <ul className="col-md-3">
                        { this.state.rooms.map( room =>
                            <li key={room.key}>{room.name}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RoomList
