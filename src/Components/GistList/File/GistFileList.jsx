import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import { getGistFileList } from '../../../API/gistAPI';
import SectionItemList from '../../Shared/Section/ItemList/SectionItemList';
import SectionItem from '../../Shared/Section/ItemList/Item/SectionItem';

const GistFiles = () => {
  const { login, id } = useParams();
  return (
    <Section
      title={`Gist: ${id}`}
      get={getGistFileList(login, id)}
      view={(gist) => (
        <SectionItemList
          items={gist.files}
          view={(file) => <SectionItem item={file} />}
        />
      )}
      backUrl={`/${login}/gists`}
    />
  );
};

export default GistFiles;
