import React from 'react';
export interface PropsTypeCard {
  item: any;
  type: string;
}
export const TypeCard = (props: PropsTypeCard): JSX.Element => {
  return (
    <div className="col-md-12">
      <div className="card ptb10 border-top">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <div className="row">
              <div className="col-md-2">
                <img className="round" src={props.type === 'user' ? props.item.avatar_url : 'http://via.placeholder.com/300x180'} alt="Card image cap" />
              </div>
              <div className="col-md-5">
                <span className="card-title font-12 bold">{props.type === 'user' ? props.item.login : props.item.name}</span>
              </div>
              <div className="col-md-5 text-right">
                <span className="card-title font-12 mtr10">{props.item.score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
