import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

// Checking account
/* const App = props => {
    return <BankAccount />;
}

class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 1000.00,
            addMoney: 0
        }
    }

    shouldComponentUpdate(nextProp, nextState) {
        if(this.state.addMoney !== nextState.addMoney) {
            return true;
        }
        if(this.state.accountBalance !== nextState.accountBalance) {
            return true;
        }
        else {
            return false;
        }
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate(){
        console.log("Component Updated");
    }

    increment() {
        console.log("Rendered!");
        this.setState((prevState, props) => 
            ({ accountBalance: prevState.accountBalance + parseInt(prevState.addMoney)})
            
        );
    }
    render() {
        return (
            <div>
                <h3>Account Balance: ${this.state.accountBalance}</h3>
                <input 
                    type="number" onChange={event => this.setState({ addMoney: event.target.value})}
                    value={this.state.addMoney}
                />
                <button onClick={this.increment.bind(this)}>Add Money</button>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root')); */

// Github Api
/* const API = 'https://api.github.com/users';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'testernick79',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: ''
    };
  }
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
        .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        });
      })
      .catch(error => console.log('Oops! . There Is A Problem'));
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
        <section id="card">
          <Profile data={this.state} />
        </section>
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    let data = this.props.data;
    let followers = `${data.homeUrl}/followers`;
    let repositories = `${data.homeUrl}?tab=repositories`;
    let following = `${data.homeUrl}/following`;
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a
            href={data.homeUrl}
            target="_blank"
            title={data.name || data.username}
          >
            <img src={data.avatar} alt={data.username} />
          </a>
          <h2>
            <a href={data.homeUrl} title={data.username} target="_blank">
              {data.name || data.username}
            </a>
          </h2>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <a href={followers} target="_blank" title="Number Of Followers">
                <i>{data.followers}</i>
                <span>Followers</span>
              </a>
            </li>
            <li>
              <a
                href={repositories}
                target="_blank"
                title="Number Of Repository"
              >
                <i>{data.repos}</i>
                <span>Repository</span>
              </a>
            </li>
            <li>
              <a href={following} target="_blank" title="Number Of Following">
                <i>{data.following}</i>
                <span>Following</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
 */

 const Department = (props) => (
    <div>{props.name}</div>
 );

 const Branch = (props) => (
     <div>{props.title}</div>
 );

 const withHeading = wrappedComponent => (props) => {
     return (
         <div>
             <h2>{props.children}</h2>
             <wrappedComponent {...props} />
         </div>
     );
 }

 const HeadingDepartment = withHeading(Department);
 const HeadingBranch = withHeading(Branch);

 const App = () => (
     <div>
         <HeadingDepartment name="Engineering">Department</HeadingDepartment>
         <HeadingBranch title="Gresham, OR">Branch</HeadingBranch>
     </div>
 );

render(<App />, document.getElementById('root'));
