import React from 'react';
import { localized, Actions } from 'mailspring-exports';
import { RetinaImg } from 'mailspring-component-kit';

export default class RefreshButton extends React.Component {
  static displayName = 'refresh';

  render() {
    return (
      <button
        className="btn btn-toolbar item-compose"
        title={localized('立刻同步邮件')}
        onClick={AppEnv.mailsyncBridge.sendSyncMailNow}
      >
        <RetinaImg name="toolbar-refresh.png" mode={RetinaImg.Mode.ContentIsMask} />
      </button>

    );
  }
}
