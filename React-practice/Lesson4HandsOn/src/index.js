import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return <Enrolled/>;

    
};

class Enrolled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolledStudents: 40,
            waitlistStudents: 7,
            addToWaitlist: "",
            addStudent: ""
            
            }
        };

    

    incrementStudent() {
        this.setState({enrolledStudents: this.state.enrolledStudents + 1});
    }
    incrementWaitlist(){
        this.setState({waitlistStudents: this.state.waitlistStudents +1});
    }

    incementMultiple() {
        this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudent)});
    }
    incrementMoreWaitlist(){
        this.setState({waitlistStudents: this.state.waitlistStudents + parseInt(this.state.addToWaitlist)});
    }


render() {
    return (
        <div>
            <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
            <button onClick={this.incrementStudent.bind(this)}>Enroll 1 NEW Student</button>
            
            <h3>Add a number of Students</h3>
            <input type="number" 
                onChange = {event => this.setState({addStudent: event.target.value})} 
                value = {this.state.addStudent} />
            <button onClick={this.incementMultiple.bind(this)}>Add More</button>

            <h1>Waitlist Students: {this.state.waitlistStudents}</h1>
            <button onClick={this.incrementWaitlist.bind(this)}>Enroll 1 More Waitlist Students</button>

            <h3>Add a number of Waitlist Students</h3>
            <input type="number" 
                onChange = {event => this.setState({addToWaitlist: event.target.value})} 
                value = {this.state.addToWaitlist} />
            <button onClick={this.incrementMoreWaitlist.bind(this)}>Add More</button>
        </div>
    );
}
};



ReactDOM.render(<App />, 

document.getElementById('root'));