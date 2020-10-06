import fetch from 'isomorphic-unfetch';

class GitHubSearch {
  getRepositoriesOrUsersByName(type, repos) {
    return fetch('https://api.github.com/search/' + type + '?q=' + repos, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getUsersAndRepositories(name) {
    const result = await Promise.all([
      this.getRepositoriesOrUsersByName('repositories', name),
      this.getRepositoriesOrUsersByName('users', name)
    ]);

    return result;
  }
}

export default new GitHubSearch();
