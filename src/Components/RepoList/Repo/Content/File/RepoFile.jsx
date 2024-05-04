import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FileContent from '../../../../Shared/FileContent/FileContent';
import Section from '../../../../Shared/Section/Section';
import { getRepoFile } from '../../../../../API/repoAPI';

const RepoFile = () => {
  const { login, repoName } = useParams();
  const { pathname } = useLocation();
  const filePath = pathname.substring(
    pathname.lastIndexOf('/file/') + '/file/'.length,
  );
  const parentDir = pathname.substring(
    pathname.indexOf('/file/') + '/file/'.length,
    pathname.lastIndexOf('/'),
  );
  const url = `${
    pathname.substring(0, pathname.indexOf('/file/'))
  }/content${
    (parentDir === '/') ? '' : `/${parentDir}`
  }`;
  return (
    <Section
      title={`File: /${filePath}`}
      get={getRepoFile(login, repoName, filePath)}
      view={(file) => <FileContent file={file} />}
      backUrl={url}
    />
  );
};

export default RepoFile;
