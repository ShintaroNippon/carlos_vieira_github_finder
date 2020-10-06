import React, { Component } from 'react';
import { connect } from 'react-redux';
import GitHubSearch from '../../services/githubsearch';

import { Header, Search, Results, Searching } from 'app/components';
import { addUsersAndCompanies } from '../../redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addUsersAndCompanies: (values) => dispatch(addUsersAndCompanies(values))
  };
}

interface State {
  name: string;
  results: any;
  show: boolean;
  loader: boolean;
}

export class AppContainers extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      results: {
        users: [],
        companies: []
      },
      show: false,
      loader: false
    };
  }

  handleChange = (event: { target: { value: any; }; }) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = this.state;
    this.setState({ loader: true });
    if (name !== '') {
      const searching = await GitHubSearch.getUsersAndRepositories(name);

      const results = {
        users: searching[1],
        companies: searching[0]
      }
      this.props.addUsersAndCompanies(results);
      this.setState({ results, show: true, loader: false });
    } else {
      this.setState({ show: false })
    }
  };

  render() {
    return (
      <div>
        {this.state.loader ? (<div className="loader"></div>) :
          (<div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 offset-md-2">
                <Header />
                <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} title={this.state.name} />
                {!this.state.show ? (<Searching />) : (<Results users={this.state.results.users} companies={this.state.results.companies} />)}
              </div>
            </div>
          </div>)
        }
      </div>
    );
  }
};

export const App = connect(
  null,
  mapDispatchToProps
)(AppContainers);
