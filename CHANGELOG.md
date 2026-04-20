# Mailspring Changelog

## 1.20.0 (4/18/2026)

Features:

- Added an "Automatic" theme (the new default) that follows system light/dark mode.

- Added system accent color support — the standard light and dark themes now use your OS accent color by default and this can be disabled from Preferences > Appearance. (#2682)

- Improved the UX around creating folders and labels in the left sidebar - it's much easier to create nested items. (#2655)

- A new "•••" menu on items in the left sidebar makes features (including the new EML export option) more discoverable.

- Added EML export functionality for messages and folders. You can save selected messages as EML by right-clicking or from the app's menu, and export entire folders by right clicking in the left navigation. (#2652)

Improvements:

- Improved password storage error handling and reporting. (#2669)

- Fixed a race condition causing Windows notification "Archive" and "Mark as Read" buttons to be unreliable.

- Added Microsoft Office 365 / Outlook account setup guidance and troubleshooting documentation. (#2656)

- Replaced text symbols with SVG icons in the toolbar. (#2658)

- Refinements to EML export task in the sidebar.

- Fixed the Wayland app_id after Electron 41 (Thanks @ReillyBrogan!)

Bug Fixes:

- Fixed an undefined `@font-weight-semi-bold` error in the ui-less-is-more theme. (#2684)

- Fixed a crash in quick preview when the capture window is destroyed. (#2671)

- Fixed an unhandled EPIPE error when writing to a dead mailsync process stdin. (#2673)

- Fixed race conditions in draft expiration and changeset handling. (#2678)

- Fixed broken IMAP UTF-7 encoding by replacing the broken `utf7` package with a custom implementation. (#2672)

- Fixed printToPDF errors being incorrectly sent to Sentry. (#2677)

- Fixed an issue where launch options and URLs were processed before app initialization was complete. (#2675)

- Fixed a crash caused by null values in draft field change detection. (#2676)

- Fixed an issue where metadata attachment could fail for newly sent messages. (#2664)

- Fixed autoupdate error handling. (#2670)

- Fixed error handling for ICS parsing in the EventHeader component. (#2668)

- Fixed crash when navigating to 'All' with accounts that have no archive category. (#2666)

- Fixed null reference crash in ContactDetail on update. (#2661)

- Fixed MacOS notifications showing a second copy of the app's icon

- Fixed null range crash in the email composer. (#2662)

- Fixed a race condition in EmailFrame that could deliver a null `doc.body` to message extensions. (#2665)

- Fixed OAuth code parsing to handle `+` characters correctly. (#2654)

- Fixed the `core:pop-sheet` shortcut being blocked in the message list with an open reply composer. (#2653)

- On Windows, fixed font-weight rendering by using CSS variables. (#2650)

- On Linux, fixed xdg-mime 'not found' error not being caught on dash-based shells. (#2667)

- Added error handling for `shell.openExternal` calls to prevent crashes on unsupported URLs. (#2679)


Developer:

- Fixed ability to declare platform-specific options via config-schema. (#2681)

- Moved `appdata.xml` to the `metainfo` directory for proper Linux packaging. (#2659) Thanks @BlueManCZ!

- Replaced direct `Electron dialog.showErrorBox` calls with `AppEnv.showErrorDialog`. (#2680)

- Improved plugin activation error handling and TypeScript compilation. (#2674)

- Suppressed LESS parse errors from Sentry reporting. (#2663)

## 1.19.1 (4/6/2026)

Bug Fixes:

- On Windows, fixed notification click handling and removed a redundant window display call. (#2648)

- Fixed the custom port input not updating in IMAP onboarding. (#2646)

- Fixed VoiceOver handling on email composer token inputs (To, CC, BCC, etc.).

Improvements:

- Additional accessibility improvements: arrow key navigation and roving tabindex between messages in the message list, keyboard focus improvements in the account sidebar, email frame ARIA target for read-all support, and focus management fixes for modals and preferences.

- On Linux, added Wayland session detection and a fallback menu button for window managers that don't support the system tray. (#2647)

- Improved handling of navigation keys (arrow keys, etc.) in the composer typing state. (#2644) Thanks @ejbiker93ss!

- Improved contact details panel styling.

Developer:

- Updated to Electron 41 (Chromium 146, Node.js 24.14), up from Electron 39 (Chromium 142, Node.js 22). (#2643)
  - Chromium updated from 142 → 146, bringing security patches and modern web standard support
  - Fixed white flash when opening app windows
  - Reduced GPU memory usage on macOS
  - On Windows: fixed a crash with UTF-8 file paths and a hang in native notification delivery
  - On macOS: fixed menu items incorrectly staying disabled after being re-enabled
  - On Windows: fixed window fullscreen state not being preserved correctly
  - On Windows: system notifications now support action buttons and inline reply inputs
  - On Linux/Wayland: frameless windows now display GTK drop shadows and support extended resize borders
  - Fixed keyboard shortcut accelerators not working after toggling a menu item's enabled state
  - Replaced the deprecated Electron clipboard renderer API with the standard `navigator.clipboard` API

- Replaced legacy dependencies (`fs-plus`, `rimraf`, `mkdirp`, `uuid`, `temp`) with native Node.js APIs, removing several third-party dependencies.

- Removed unused dependencies `deep-extend` and `graceful-fs`.

- Added TypeScript typecheck and lint steps to the per-commit GitHub Actions workflow.

- Updated license dates.

## 1.19.0 (3/9/2026)

Features:

- Comprehensive accessibility improvements, including semantic landmarks, ARIA attributes, focus traps for modals, accessibility labels on buttons, and more. If you use Mailspring using a screenreader, we'd love feedback about this release. (#2638)

- Added VCard import/export functionality to contacts. (#2626)

- Added support for creating new calendar events via double-click on the calendar. (#2635)

- Added Calendar menu and keyboard shortcuts. (#2634)

Bug Fixes:

- Fixed a TypeError when a contact's birthday date is undefined. (#2632)

- Fixed Windows app restart and update handling with Squirrel. (#2631)

- Fixed `canBeUndone` initialization in ChangeMailTask subclasses. (#2630)

- Gracefully handle `xdg-mime` not being present on some Linux machines.

- Fixed poor Sentry reporting of errors bridged over the `report-error` IPC channel.

- Fixed an "Invalid String Length" error in the mailsync-process wrapper on very large stderr output.

- Fixed a CardDAV issue with headers on XML requests and empty multiget responses.

- Fixed `ERR_ABORTED` errors from quick previews being silently reported to Sentry.

Improvements:

- Improved calendar event editing with ICS-based recurrence support. (#2637)

- Added recurring event indicator icon to calendar events. (#2633)

- Added tray icon theme picker and 'none' style option for Linux. (#2628)

- Tuned thread list swipe gesture detection, and added an option to disable swipe gestures. (#2629)

- Folded grammar check preferences into General > Composer. (#2639)

- Improved emoji popover positioning and updated emoji artwork with new additions.

- Recovered the Slate editor when the user selects all and deletes all text, leaving only quoted text.

- Added `WSAGetLastError()` logging for TCP connection failures on Windows (mailsync).

Developer:

- Added `X-GNOME-UsesNotifications=true` to the Linux `.desktop` file. (#2640) Thanks @LinusDierheimer!

- Added `vcs-browser` to the Linux AppStream metadata. (#2641) Thanks @LinusDierheimer!

- Removed deprecated Electron 4 polyfills and other outdated TODOs. (#2636)

- Moved tests to `@testing-library/react`, run in GitHub Actions.

- Added community plugins and themes documentation. (#2627)

## 1.18.0 (2/22/2026)

Features:

- Grammar check is now available in the composer! (#2612)

  - This feature relies on a deployment of LanguageTool at id.getmailspring.com - when you use Grammar Check, small snippets of your draft are sent to this server, but the requests are not logged and no message data is stored.
  - This feature is disabled by default. To turn it on, click the new icon in the composer toolbar.

- Mailspring now properly detects "Do Not Disturb" status on MacOS Sequoia and on Windows.

Bug Fixes:

- On Wayland, the `--background` flag now shows the main window briefly then hides it, which is the best we can do under Wayland's rules. (#2623)

- On Wayland, fixed a keyboard freeze in the composer caused by a double `focus()` call. (#2622)

- Fixed sound notifications playing on Windows regardless of the notification preference. (#2619)

- Fixed the tray icon theme detection on GNOME/Unity Linux desktops. (#2610)

- Fixed a crash in vCard parsing when the `VERSION` line is not found.

- Fixed an issue with the first CardDAV sync incorrectly seeing existing ETags in mailsync.

- Fixed IMAP IDLE to process `VANISHED` notifications sent by FastMail (and possibly other providers).

- Fixed folder priority logic that was incorrectly applied to non-iCloud accounts in mailsync.

Improvements:

- Added support for the stnadard biographies / notes field on contacts. (#2621)

- Rearranged the thread context menu to reduce accidental destructive actions. (#2620)

- Added an empty state to the calendar when no CalDAV accounts are connected. (#2625)

- The draft window now uses the message subject as the window title.

- Improved read receipt tracking pixel reliability. (#2613)

- Improved mail rules robustness and fixed condition evaluation bugs. (#2616)

- Added VTIMEZONE to created calendar events so they are created on Yahoo in the correct timezone.

- Enabled CalDAV discovery to support Fastmail, Yahoo, and other providers in the upcoming calendar.

- On Windows, the app icon is now a rounded square to better fit with Windows 11 design guidelines.

Developer:

- Replaced CSS-based platform hiding with React conditionals in preferences. (#2614)

- Removed subpixel-antialiased font smoothing overrides. (#2618)

- Added `syncInit` to main-calendar to eliminate a 2.5s startup delay. (#2606)

## 1.17.4 (2/11/2026)

Features:

- Added Agenda view to the calendar for chronological event browsing. (#2592)

- Added Linux Do Not Disturb detection for notification suppression. (#2595)

- Added Windows jump list and badge icon desktop integration. (#2594)

- Added ARM64 (aarch64) Linux build support. (#2601)

- The selected calendar view now persists across sessions. (#2600)

Bug Fixes:

- Fixed support for Wayland - window activation context is now handled gracefully. (#2599)

- Fixed the app's system tray icon appearing as three dots (•••) at launch on Ubuntu 25.

- Fixed summary notifications: broken Windows toast URLs and race condition. (#2597)

- Improve Yandex account sync by ignoring their XLIST implementation, which is known to be buggy.

- Fixed mutex re-entry locks during exception handling in mailsync that could be hit if a network disconnect caused both sync workers to throw at the same time.

- Reverted IDLE error suppression that caused sync issues.

Improvements:

- On Linux, default to thin window framing with hamburger-style right menu. (#2604)

- On Linux, added dark/light system tray icon support. (#2602)

- Improved JS algorithm performance using Map/Set for better collection handling. (#2596)

- Enabled support for custom config directory path. (#2587) Thanks @DerDemystifier!

- Added missing release info in appdata. (#2586) Thanks @ychavoya!

Developer:

- Updated node-abi to 3.87.0 and added support for prebuilt better-sqlite3 binaries. (#2598)

- Signed native .node addon files for Smart App Control compliance. (#2589)

- Fixed RPM packaging dependencies for Fedora 43 and openSUSE compatibility. (#2590)

- Fixed openSUSE CI test and RPM post-install scriptlet issues. (#2591)

## 1.17.3 (1/31/2025)

- Updates the .deb package dependencies to address Ubuntu 25 (libtidy58 replaces libtidy5deb1) and Linux Mint 22 (libcurl4t64, libgtk-3-0t64 instead of libgtk-3-0) installation issues.

- Fix issues sending email on Windows caused by missing SASL libraries in some scenarios.

- Screenshot mode now blurs the content of your emails as well (Thanks @cheack!)

- The `Spanish - Latin America` (es_419) translations have been verified (Thanks @MiguVT!) and we've used the latest LLMs to update machine translations in other language files that were many years old.

### Developer:

- We added Ubuntu 25 and Linux Mint to the automated installation checks in Github Actions to ensure the .deb file installs correctly on these distributions.

- The Mailsync post-build checks in Github Actions (on Mac, Windows, Linux) now authenticate against smtp.gmail.com in addition to establishing an SMTP SSL connection to verify that the SASL libraries are present in the distribution. (To prevent the Windows SMTP issue from ever happening again...)

## 1.17.2 (1/24/2025)

Features:

- Calendar now includes a Day View for more detailed scheduling. (#2573)

- Calendar events can now be edited and synced back to the server. Drag events to reschedule them, or double-click to edit details. (#2574)

- Mailspring now supports one-click unsubscribe using email headers (RFC 2369/8058). When an email includes unsubscribe headers, a link appears to quickly unsubscribe. (#2576)

Bug Fixes:

- Fixed a race condition in category pickers (folder/label selectors) that caused the search input to lock up. (#2580)

- Fixed composer input lag where Enter and Backspace keys sometimes required multiple presses. (#2578)

- Fixed Office365 OAuth authentication issues caused by an origin header. (#2579)

- Fixed RSVP calendar event handling bugs and improved RFC 5546/6047 compliance. (#2575)

- Fixed missing mailsync dependencies in Linux packages.

- Fixed disappearing emails on iCloud accounts by disabling QRESYNC.

- Fixed network error handling during CardDAV/CalDAV discovery.

- Fixed HTTP 406 errors during CardDAV/CalDAV discovery on Yahoo accounts.

- Fixed in-reply-to header parsing on iCloud accounts where spam messages contain garbage values.

- Fixed Yandex account sync error handling.

Improvements:

- Screenshot Mode now supports non-Latin characters. (#2577) Thanks @cheack!

Developer:

- Added GitHub Actions checks that verify Linux artifacts install and run correctly on Ubuntu, Fedora, and Arch Linux.

- Removed unused Grunt tasks and cleaned up the eslint task. (#2569)

- Windows mailsync dependencies moved to vcpkg for OpenSSL 3.6, latest libcurl, iconv, libtidy, libxml2, and sasl2.

- Added openSUSE Tumbleweed to mailsync CI tests.

## 1.17.1 (1/15/2025)

Bug Fixes:

- Keyboard navigation in Mailspring's thread list has been fixed!

- On Fedora, the libtidy dependency is more broadly specified to support both soname versions (libtidy.so.5 or libtidy.so.58)

We're aware of issues with Wayland support for some Linux users and are investigating how to handle these scenarios better, since Wayland became the default for Electron apps in September.

## 1.17.0 (1/14/2025)

This is Mailspring's biggest update in a while!

The "infinite sync bug" that impacted iCloud accounts has been fixed, and we reviewed and applied many other patches to Mailcore and libetpan to improve mail sync.

This release includes significant security updates - Mailspring now uses the system-bundled sasl2, ssl, crypto and curl libraries on all Linux platforms, and the UI has moved to the latest version of Electron. (On Linux, Electron 39 also brings native support for Wayland!)

This release resolves issues with spellcheck on Windows, and also adds support for Windows toast notifications with inline actions.

Bug Fixes:

- On Windows, the Start Menu integration has been updated for Windows 11 and the "default mail client" option now links directly to Mailspring's page in Windows Settings.

- On Windows, `mailto:` link handling no longer breaks due to a launch argument parsing issue.

- On Windows, spellcheck now works correctly by using the DOM spellcheck attribute with typing debounce. (#2535)

- On macOS, notifications now correctly respect Do Not Disturb settings. (#2525)

- On macOS, Mailspring can now correctly create and delete the LaunchAgent file for launch on startup. (#2509)

- On Linux, the tray icon no longer shares an ID with other Electron apps. (#2529)

- On Linux, native Wayland support is now enabled in the Snap package. (#2527)

- The "Message Clipped - Show All" window no longer has encoding issues. (#2526)

- "Download All Attachments" no longer incorrectly renames files with hyphen-number patterns. (#2531)

- Additional safeguards have been added to attachment preview generation. (#2523)

Localization:

- Hungarian is now a manually verified language!

- Brazilian Portuguese (pt-BR) translation has been updated. (#2504, #2506)

Developer:

- Mailspring now uses Electron 39, Chromium 140, and Node.js 22 for improved performance and security.

- Mac, Windows, and Linux builds are now managed entirely with Github Actions, and new Github Actions for mailsync verify that the Linux binary is portable and runs on Ubuntu, Fedora, and Arch Linux.

- TypeScript has been upgraded from version 3 to version 5. (#2547)

- React has been upgraded from 16.6.0 to 16.9.0. (#2545)

- Windows builds now use GitHub Actions instead of AppVeyor. (#2524)

- Many dependencies have been upgraded to address npm audit issues, including better-sqlite, uuid, ical.js, juice, lru-cache, snarkdown, and node-emoji.

Sync Improvements:

- Fixed multiple memory leaks, race conditions, and potential deadlocks following an in-depth automated code review.

- Fixed CardDAV to avoid re-discovering address books on every sync.

- Fixed SMTP EHLO/HELO with IPv6 addresses on Linux.

- Fixed handling of empty IMAP parts from Outlook.com servers.

- SQLite has been upgraded to the latest version.

- Fixed Windows build compatibility with strptime and timegm functions.

Calendar Preview:

- The Calendar preview now includes a full month view with day, week, and month navigation.

- You can now search for events in the calendar.

- Dragging calendar events will soon update their time, making it easier to reschedule items.

- CalDAV sync now supports calendar colors, recurring events with exceptions, and smart rate limiting for 429 responses.

- CalDAV now uses ctags to skip unnecessary syncs when calendars haven't changed.

- Fixed CalDAV crashes on Gmail accounts when parsing privilege-set.


## 1.16.0

- Thunderbird-style Autoconfiguration (#2493)

- Fix in-app previews for PDF attachments on Windows / Linux

- Update and improve zh-TW Traditional Chinese locale (#2498)

- Update Czech translation (#2500)

- snap: Use core24 as base (#2497)

- Change lsb-core-noarch to be an optional dependency in the RPM package. (#2503)

- Fix a few misc application errors logged to our reporting service

- Upgrade to Electron 37.2.2 - Chromium 138, V8 13.8, and Node.js 22.16 for faster JavaScript execution and better email rendering.

## 1.15.1

## [1.15.2] - 2025-06-26
### 新增内容
- 为所有窗口添加了三个窗口按钮，弥补无边框的问题
- 左上角添加了一个按钮来主动同步邮件
- 点击托盘图标时主动同步邮件
- 为启动时的托盘图标额外添加了一个加载的图标

### 作出更改
- 更改了左侧邮箱分类的排序，更美观
- 更改了部分翻译内容，更加易于理解

### 修复错误
- 修复了emoji选择器显示错位、鼠标映射完全乱套的BUG
- 修复了一大堆汉化翻译不全的问题

### 已移除内容
- 移除了应用边框
- 移除了小部分冗余功能和显示项