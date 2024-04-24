import AppStoreButtons from './AppStoreButton';

function TextContainer() {
  return (
    <div className='text-container'>
      <h1 className='title'>Find the stuff you’ll love.</h1>
      <p className='text'>
        Aliquam rhoncus pretium dolor volutpat lectus odio non tellus neque. Aliquet et
        purus nibh bibendum integer etiam in enim nisi.
      </p>
      <AppStoreButtons />
    </div>
  );
}

export default TextContainer;
