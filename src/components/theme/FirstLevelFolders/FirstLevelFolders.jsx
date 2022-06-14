import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchContent } from '@plone/volto/actions';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

const FirstLevelFolders = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state) => state.search.subrequests.someitems?.items,
  );

  React.useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          'path.depth': 1,
          portal_type: ['Folder'],
          exclude_from_nav: false,
          fullobjects: true,
        },
        'someitems',
      ),
    );
  }, [dispatch]);

  return (
    <>
      <h3>searchContent action test</h3>
      {items?.map(function (item, i) {
        return (
          <Link key={i} to={flattenToAppURL(item['@id'])}>
            <h3>{item['title']}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default FirstLevelFolders;
