import React from 'react';

export const Search = ({handleSubmit, handleChange, title}: any): JSX.Element => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="w-100 search-text mt50"
            type="text"
            id="name"
            value={title}
            onChange={handleChange}
            placeholder="Type a user name here and click on icon search on right"
          />
        </div>
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  );
};
