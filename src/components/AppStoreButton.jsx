import appStoreLogo from '/img/app-store-button.png';
import googlePlayLogo from '/img/google-play-button.png';

/**
 * Renders buttons linking to the App Store and Google Play Store for app downloads.
 * It includes images and links that open in new tabs to the respective app store pages.
 */

function AppStoreButtons() {
  return (
    <div>
      <div className='app-store-btn'>
        <a href='https://apple.com' target='_blank'>
          <img src={appStoreLogo} alt='App Store' />
        </a>
      </div>
      <div className='google-play-btn'>
        <a href='https://play.google.com' target='_blank'>
          <img src={googlePlayLogo} alt='Google Play Store' />
        </a>
      </div>
    </div>
  );
}

export default AppStoreButtons;
