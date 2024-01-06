import { OsInfo } from '@panel/common';
import { exec } from 'child_process';
import * as si from 'systeminformation';
import { promisify } from 'util';

const execp = promisify(exec);

export default {
  static: async (): Promise<OsInfo> => {
    const osInfo = await si.osInfo();

    const buildInfo = JSON.parse(
      (await execp('cat version.json')
        .then(({ stdout }) => stdout)
        .catch(() => undefined)) ?? '{}'
    );
    const gitHash = await execp('git log -1 --format="%H"')
      .then(({ stdout }) => stdout.trim())
      .catch(() => undefined);
    const panel_version = buildInfo.version ?? 'unknown';
    const panel_buildhash = buildInfo.buildhash ?? gitHash;

    return {
      arch: osInfo.arch,
      distro: osInfo.distro,
      kernel: osInfo.kernel,
      platform: osInfo.platform,
      release:
        osInfo.release === 'unknown'
          ? osInfo.build || 'unknown'
          : osInfo.release,
      uptime: 0,
      panel_version,
      panel_buildhash,
    };
  },
};
