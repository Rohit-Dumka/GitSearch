import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Section from '../../../Shared/Section/Section';
import RepoFileList from './File/RepoFileList';
import { getRepoContent } from '../../../../API/repoAPI';

const RepoContent = () => {
  const { login, name } = useParams();
  const { pathname } = useLocation();
  const dir = pathname.substring(pathname.indexOf(name));
  const titleSuffix = (
    pathname.substring(
      pathname.indexOf(`${name}/content`) + `${name}/content/`.length,
    )
  );
  const title = `Content${titleSuffix && `: /${titleSuffix}`}`;
  return (
    <Section
      title={title.length < 80 ? title : `${title.substring(0, 80)}...`}
      get={getRepoContent(login, dir)}
      view={(content) => <RepoFileList content={content} />}
      backUrl={titleSuffix.length ? pathname.substring(0, pathname.lastIndexOf('/')) : ''}
    />
  );
};

export default RepoContent;
