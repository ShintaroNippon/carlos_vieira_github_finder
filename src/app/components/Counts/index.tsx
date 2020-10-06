import React from 'react';

export interface PropsCounts {
  type: string;
  counts: number;
  nameone: string;
  nametwo: string;
}

export const Counts = (props: PropsCounts): JSX.Element => {
  return (
    <div className="col-md-12">
      <div className="border-bottom-counts">
        <span>{props.type}</span>
        <span>&nbsp;&nbsp;({props.counts})</span>
      </div>
      <div className="row">
        <div className="col-md-6 mt10">
          <span>{props.nameone}</span>
        </div>
        <div className="col-md-6 mt10 txt-right">
          <span>{props.nametwo}</span>
        </div>
      </div>
    </div>
  );
};
