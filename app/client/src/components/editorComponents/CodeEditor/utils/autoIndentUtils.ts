import { PLATFORM_OS, getPlatformOS } from "utils/helpers";

const autoIndentShortcut = {
  [PLATFORM_OS.MAC]: "shift-cmd-p",
  [PLATFORM_OS.IOS]: "shift-cmd-p",
  [PLATFORM_OS.WINDOWS]: "shift-alt-f",
  [PLATFORM_OS.ANDROID]: "shift-alt-f",
  [PLATFORM_OS.LINUX]: "shift-ctrl-i",
};

export const getAutoIndentShortcutKey = () => {
  const platformOS = getPlatformOS();
  const autoIndentKey = platformOS
    ? autoIndentShortcut[platformOS]
    : "shift-alt-f";
  return autoIndentKey;
};