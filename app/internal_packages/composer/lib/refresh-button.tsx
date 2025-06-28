import React from 'react';
import { localized, Actions } from 'mailspring-exports';
import { RetinaImg } from 'mailspring-component-kit';
import { ipcRenderer } from 'electron';

export default class RefreshButton extends React.Component {
  static displayName = 'refresh';

  render() {
    return (
      <button
        className="btn btn-toolbar item-compose"
        title={localized('立刻同步邮件')}
        onClick={() => ipcRenderer.send('sync-new-mails')}
      >
        <RetinaImg name="toolbar-refresh.png" mode={RetinaImg.Mode.ContentIsMask} />
      </button>

    );
  }
}
