import React, { useState } from 'react';
import { Counts } from '../Counts/index';
import { TypeCard } from '../TypeCard/index';
import { ZeroFound } from '../ZeroFound/index';

export interface PropsResults {
  users: any;
  companies: any;
}

export const Results = (props: PropsResults): JSX.Element => {
  const [userMore, setUserMore] = useState(5);
  const [companyMore, setCompanyMore] = useState(5);
  let companiesItems = <ZeroFound />;
  if (props.companies.items && props.companies.items.length > 0) {
    companiesItems = props.companies.items.slice(0, companyMore).map((item) => {
      return <TypeCard type="company" item={item} key={item.id} />;
    });
  }
  let userItems = <ZeroFound />;
  if (props.users.items && props.users.items.length > 0) {
    userItems = props.users.items.slice(0, userMore).map((item) => {
      return <TypeCard type="user" item={item} key={item.id} />;
    });
  }

  return (
    <div className="mt50">
      <div className="row">
        {props.users && Object.keys(props.users).length > 0 && (
          <div className="col-md-6">
            <Counts type={'USERS'} counts={props.users.total_count} nameone={'USER'} nametwo={'CONTRIBUTIONS'} />
            {userItems}
            {props.users.items && props.users.items.length > 0 ? (
              <div className="col-md-6 offset-md-3 text-center mt25">
                <span className="pointer" onClick={() => setUserMore(userMore + 5)}>
                  SHOW MORE
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        )}
        {props.companies && Object.keys(props.companies).length > 0 && (
          <div className="col-md-6">
            <Counts type={'COMPANIES'} nameone={'COMPANY'} nametwo={'PEOPLE'} counts={props.companies.total_count} />
            {companiesItems}
            {props.companies.items && props.companies.items.length > 0 ? (
              <div className="col-md-6 offset-md-3 text-center mt25">
                <span className="text-center pointer" onClick={() => setCompanyMore(companyMore + 5)}>
                  SHOW MORE
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        )}
      </div>
    </div>
  );
};
